import * as fs from "fs";
import { JSDOM } from 'jsdom';
import * as glob from "glob";

const webUrl = "https://api.gamesparks.net";
const outPath = "./typings/";

interface IApiInfo {
	href: string,
	title: string,
	descriptions: string[],
	requestParameters: {
		Parameter: string,
		Required: string,
		Type: string,
		Description: string,
	}[],
	responseDescriptions: string[],
	responseParameters: {
		Parameter: string,
		Type: string,
		Description: string,
	}[],
	errorCodes: {
		Key: string,
		Value: string,
		Description: string,
	}[],
	example: string[],
}
interface IDataInfo {
	href: string,
	title: string,
	descriptions: string[],
	parameters: {
		Parameter: string,
		Type: string,
		Description: string,
	}[],
}

async function build() {
	console.log("read...");
	const dom = await JSDOM.fromURL(webUrl);

	const contents = dom.window.document.getElementsByClassName("content");
	for (let i = 0; i < contents.length; i++) {
		const content = contents[i];
		let h1 = "";
		for (let j = 0; j < content.childNodes.length; j++) {
			const node = content.childNodes[j] as Element;
			if (node.localName == undefined) {
				continue;
			}
			if (node.localName == "h1") {
				h1 = node.textContent as string;
				continue;
			}
			if (h1 == "Introduction" || h1 == "Messages") {
				continue;
			}
			if (node.localName == "h2") {
				const title = node.textContent as string;
				if (h1 == "Data Types") {
					// Data
					const data: IDataInfo = {
						href: h1,
						title: title,
						descriptions: [],
						parameters: [],
					};
					data.descriptions = getNextDescriptions(content, j);
					j = gotoTag(content, "table", j + 1);
					data.parameters = readTableNode(content.childNodes[j]);
					handleData(data);
				}
				else {
					// Request API
					const api: IApiInfo = {
						href: h1,
						title: title,
						descriptions: [],
						requestParameters: [],
						responseDescriptions: [],
						responseParameters: [],
						errorCodes: [],
						example: [],
					};
					api.example = getNextExample(content, j);
					api.descriptions = getNextDescriptions(content, j);
					j = gotoTag(content, "table", j + 1); // Request Parameters
					api.requestParameters = readTableNode(content.childNodes[j]);
					api.responseDescriptions = getNextDescriptions(content, j);
					j = gotoTag(content, "table", j + 1); // Response Parameters
					api.responseParameters = readTableNode(content.childNodes[j]);
					if (content.childNodes[j + 2].textContent == "Error Codes") {
						j = gotoTag(content, "table", j + 1); // Error Codes
						api.errorCodes = readTableNode(content.childNodes[j]);
					}
					handleReurestAPI(api);
				}
			}
		}
	}
	wirteIndexDts();
}
function wirteIndexDts() {
	const path = "./index.d.ts";
	glob(outPath + "**/*.d.ts", (err, files) => {
		let index = "";
		files.forEach(file => {
			index += "/// <reference path=\"[file_path]\" />\n".replace("[file_path]", file);
		});
		fs.writeFileSync(path, index);
	});
	console.log(path);
}
function getNextDescriptions(content: Node, j: number): string[] {
	const descriptions: string[] = [];
	let isGetDes = false;
	for (let k = j + 1; k < content.childNodes.length; k++) {
		const node_2 = content.childNodes[k] as Element;
		if (node_2.localName == undefined) {
			j++;
			continue;
		}
		if (node_2.localName == "p") {
			descriptions.push(node_2.textContent as string);
			isGetDes = true;
		}
		else if (node_2.localName == "table" || node_2.localName == "h2" || isGetDes) {
			break;
		}
		j++;
	}
	return descriptions;
}
function gotoTag(content: Node, findLocalName: string, start: number) {
	for (let i = start; i < content.childNodes.length; i++) {
		const node = content.childNodes[i] as Element;
		if (node.localName == undefined) {
			continue;
		}
		else if (node.localName == findLocalName) {
			return i;
		}
	}
	return -1;
}
function getNextExample(content: Node, current: number): string[] {
	let example: string[] = [];
	const start = gotoTag(content, "pre", current + 1);

	for (let i = start; i < content.childNodes.length; i++) {
		const node = content.childNodes[i] as Element;
		if (node.localName == undefined) {
			continue;
		}
		if (node.localName != "pre") {
			break;
		}
		const e = node as Element;
		if (!e) {
			break;
		}
		if (e.className == "highlight ccsdk") {
			const code = e.firstChild;
			if (!code) {
				break;
			}
			for (let j = 1; j < code.childNodes.length - 1; j++) {
				const line = code.childNodes[j];
				example.push(line.textContent as string);
			}
			example = example.join("").split("\n");
			break;
		}
	}
	return example;
}
function handleData(data: IDataInfo) {
	if (!fs.existsSync(outPath)) {
		fs.mkdirSync(outPath);
	}
	if (!fs.existsSync(outPath + data.href + "/")) {
		fs.mkdirSync(outPath + data.href + "/");
	}

	let dts = "";
	let level = 0;
	dts += getLevelSpace(level) + "declare namespace SparkRequests {\n";
	level++; {
		dts += createDes(data.descriptions, level);
		dts += getLevelSpace(level) + "class " + data.title + " {\n";
		level++; {
			for (let i = 0; i < data.parameters.length; i++) {
				const requestParameter = data.parameters[i];
				dts += createDes([requestParameter.Description], level);
				dts += getLevelSpace(level) + requestParameter.Parameter + ": " + requestParameter.Type + ";\n"
			}
		} level--;
		dts += getLevelSpace(level) + "}\n";
	} level--;

	dts += getLevelSpace(level) + "}\n";

	const path = outPath + data.href + "/" + data.title + ".d.ts";
	fs.writeFileSync(path, dts);
	console.log(path);
}
function handleReurestAPI(data: IApiInfo) {
	if (!fs.existsSync(outPath)) {
		fs.mkdirSync(outPath);
	}
	if (!fs.existsSync(outPath + data.href + "/")) {
		fs.mkdirSync(outPath + data.href + "/");
	}

	const requestExtends = "_Request";
	const response = "_" + data.title.replace("Request", "Response");
	const responseExtends = "_Response";

	let dts = "";
	let level = 0;
	dts += getLevelSpace(level) + "declare namespace SparkRequests {\n";
	level++; {
		// Resuest
		if (data.errorCodes.length > 0) {
			data.descriptions.push("");
			data.descriptions.push("### Error Codes");
			data.descriptions.push("Key | Value | Description");
			data.descriptions.push(":- | :- | :-");
			data.errorCodes.forEach(errorCode => {
				const des = [
					errorCode.Key.replace(/\|/g, "&#124;"),
					errorCode.Value.replace(/\|/g, "&#124;"),
					errorCode.Description.replace(/\|/g, "&#124;"),
				].join(" | ");
				data.descriptions.push(des);
			});
		}
		if (data.example.length > 0) {
			data.descriptions.push("");
			data.descriptions.push("@example");
			data.example.forEach(code => {
				data.descriptions.push(code);
			});
		}
		dts += createDes(data.descriptions, level);
		dts += getLevelSpace(level) + "class " + data.title + " extends " + requestExtends + "<" + response + "> {\n";
		level++; {
			for (let i = 0; i < data.requestParameters.length; i++) {
				const requestParameter = data.requestParameters[i];
				const required = "@Required " + requestParameter.Required;
				dts += createDes([requestParameter.Description, required], level);
				dts += getLevelSpace(level) + requestParameter.Parameter + ": " + requestParameter.Type + ";\n"
			}
		} level--;
		dts += getLevelSpace(level) + "}\n";
		// Response
		dts += createDes(data.responseDescriptions, level);
		dts += getLevelSpace(level) + "class " + response + " extends " + responseExtends + " {\n";
		level++; {
			for (let i = 0; i < data.responseParameters.length; i++) {
				const responseParameter = data.responseParameters[i];
				dts += createDes([responseParameter.Description], level);
				dts += getLevelSpace(level) + responseParameter.Parameter + ": " + responseParameter.Type + ";\n"
			}
		} level--;
		dts += getLevelSpace(level) + "}\n";
	} level--;

	dts += getLevelSpace(level) + "}\n";

	const path = outPath + data.href + "/" + data.title + ".d.ts";
	fs.writeFileSync(path, dts);
	console.log(path);
}
function createDes(dess: string[], level: number) {
	if (dess.length == 0) {
		return "";
	}
	let des = getLevelSpace(level) + "/**\n";
	for (let i = 0; i < dess.length; i++) {
		if (i > 0) {
			// des += getLevelSpace(level) + " *\n";
		}
		des += getLevelSpace(level) + " * " + dess[i] + "\n";
	}
	des += getLevelSpace(level) + " */\n"
	return des;
}
function getLevelSpace(level: number) {
	let space = "";
	while (level > 0) {
		level--;
		space += "    ";
	}
	return space;
}
function readTableNode(node: Node) {
	const tab: any[] = [];
	const requestTitles = node.childNodes[0].childNodes[1];
	const requestPars = node.childNodes[1];
	for (let k = 1; k < requestPars.childNodes.length; k += 2) {
		const requestPar = requestPars.childNodes[k];
		const requestObj: any = {};
		for (let l = 1; l < requestPar.childNodes.length; l += 2) {
			const key = requestTitles.childNodes[l];
			const val = requestPar.childNodes[l];
			requestObj[key.textContent as string] = val.textContent;
		}
		tab.push(requestObj);
	}
	return tab
}

build();
