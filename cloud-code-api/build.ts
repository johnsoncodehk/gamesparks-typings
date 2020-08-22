import * as fs from "fs";
import { JSDOM } from 'jsdom';
import * as glob from "glob";

const webUrl = "https://docs.gamesparks.com/api-documentation/";
const outPath = "./typings/";
const baseUrl = "https://docs.gamesparks.com";
const baseHref = "/api-documentation/cloud-code-api/";
const baseMenuTitle = "Cloud Code API";
const ingnoreDescriptions = [
	"@returns example",
];
// JSON is exist of es2015
const typeConverts: { from: string, to: string, }[] =
	[
		{ from: "JSON", to: "any" },
		{ from: "JSON[]", to: "any[]" },
	];

interface IClassInfo {
	name: string,
	folder: string,
	descriptions: string[],
	signatures: {
		text: string,
		returns: string,
		deprecated: string,
		validity: string,
		descriptions: string[],
		lastDescriptionIndex: number,
		params: {
			name: string,
			descriptions: string[],
		}[],
		example: string,
		returnsDescription: string,
	}[],
}

async function build() {
	console.log("read...");
	const dom = await JSDOM.fromURL(webUrl);

	const subMenus = dom.window.document.getElementsByClassName("sub-menu ");
	const subMenuPromises = [];
	for (let i = 0; i < subMenus.length; i++) {
		const subMenu = subMenus[i];
		subMenuPromises.push(buildSub(subMenu));
	}
	await Promise.all(subMenuPromises)
	wirteReferencesDts();
}
async function buildSub(subMenu: Element) {
	const firstChild = subMenu.childNodes[1] as Element;
	const href = firstChild.attributes.getNamedItem("href")!.nodeValue as string;
	if (href.indexOf(baseHref) != 0) {
		return;
	}

	const url = baseUrl + href;
	const page = await JSDOM.fromURL(url);
	const content = page.window.document.getElementsByClassName("content")[0];
	let folder = "";
	if (subMenu.parentNode && subMenu.parentNode.parentNode) {
		const parent = subMenu.parentNode.parentNode;
		if (parent.childNodes[1].textContent != baseMenuTitle) {
			folder = parent.childNodes[1].textContent as string;
		}
	}

	const c: IClassInfo = {
		name: "",
		folder: folder,
		descriptions: [],
		signatures: [],
	};

	let j = 0;
	for (; j < content.childNodes.length; j++) {
		const childNode = content.childNodes[j] as Element;
		if (childNode.localName == undefined) {
			continue;
		}
		if (childNode.localName == "h1") {
			c.name = childNode.textContent as string;
			continue;
		}
		if (childNode.localName == "h2") {
			break;
		}
		c.descriptions.push(childNode.textContent as string);
	}
	for (; j < content.childNodes.length; j++) {
		const childNode = content.childNodes[j] as Element;
		if (childNode.localName == undefined || !childNode.textContent) {
			continue;
		}
		const firstChild = childNode.childNodes.length > 0 ? childNode.childNodes[0] as Element : undefined;
		// signature
		if (!!firstChild && firstChild.localName as string == "em" && childNode.childNodes[0].textContent == "signature") {
			let signature = childNode.childNodes[1].textContent as string;
			for (let k = 2; k < childNode.childNodes.length; k++) {
				signature += childNode.childNodes[k].textContent;
			}
			signature = signature.substr(1);
			if (signature.indexOf("()") == -1) {
				const parsStr = signature.split("(")[1].split(")")[0];
				const pars = parsStr.split(", ");
				for (let k = 0; k < pars.length; k++) {
					const temp = pars[k].split(" ");
					pars[k] = temp[1] + ": " + convertType(temp[0]);
				}
				signature = signature.split("(")[0] + "(" + pars.join(", ") + ")";
			}
			c.signatures.push({
				text: signature,
				returns: "",
				deprecated: "",
				validity: "",
				descriptions: [],
				lastDescriptionIndex: -1,
				params: [],
				example: "",
				returnsDescription: "",
			});
			continue;
		}
		const lastSignature = c.signatures[c.signatures.length - 1];
		// returns
		if (!!firstChild && firstChild.localName as string == "em" && childNode.childNodes[0].textContent == "returns") {
			const returns = childNode.textContent.replace("returns ", "");
			lastSignature.returns = convertType(returns);
			continue;
		}
		// deprecated
		if (!!firstChild && firstChild.localName as string == "b" && (childNode.childNodes[0].textContent as string).indexOf("DEPRECATED ") == 0) {
			let deprecated = childNode.childNodes[childNode.childNodes.length - 1].textContent as string;
			deprecated = deprecated.replace("DEPRECATED ", "");
			lastSignature.deprecated = deprecated;
			continue;
		}
		// validity
		if (!!firstChild && firstChild.localName as string == "b" && childNode.childNodes[0].textContent == "validity") {
			let validity = childNode.childNodes[childNode.childNodes.length - 1].textContent as string;
			validity = validity.substring(1);
			lastSignature.validity = validity;
			continue;
		}
		if (!!firstChild && firstChild.localName == undefined && childNode.localName as string == "p") {
			// description start
			if (lastSignature.lastDescriptionIndex == -1) {
				lastSignature.descriptions.push(childNode.textContent);
				lastSignature.lastDescriptionIndex = j;
			}
			// params start
			else if (childNode.textContent.indexOf(" - ") >= 0) {
				const pStrs = childNode.textContent.split(" - ");
				lastSignature.params.push({
					name: pStrs[0],
					descriptions: pStrs.length > 0 ? [pStrs[1]] : [],
				});
				for (let k = j + 1; k < content.childNodes.length; k++) {
					const nextChildNode = content.childNodes[k] as Element;
					if (nextChildNode.localName == undefined) {
						continue;
					}
					if (nextChildNode.childNodes.length == 1 && (nextChildNode.childNodes[0] as Element).localName == undefined && nextChildNode.localName as string == "p" && nextChildNode.textContent && nextChildNode.textContent.indexOf(" - ") == -1) {
						lastSignature.params[lastSignature.params.length - 1].descriptions.push(nextChildNode.textContent);
						j++
						continue;
					}
					break;
				}
			}
			else if (j - lastSignature.lastDescriptionIndex == 2) {
				lastSignature.descriptions.push(childNode.textContent);
				lastSignature.lastDescriptionIndex = j;
			}
			continue;
		}
		// returns description
		if (!!firstChild && firstChild.localName as string == "b" && childNode.childNodes[0].textContent == "returns") {
			lastSignature.returnsDescription = content.childNodes[j + 2].textContent as string;
			j += 2;
			continue;
		}
		// example
		if (childNode.localName == "pre" && !!childNode.attributes.getNamedItem("code-brush")) {
			lastSignature.example = childNode.textContent;
			continue;
		}
	}
	handleData(c);
}
function wirteReferencesDts() {
	const path = "./references.d.ts";
	glob(outPath + "**/*.d.ts", (err, files) => {
		let index = "";
		for (const file of files) {
			index += "/// <reference path=\"[file_path]\" />\n".replace("[file_path]", file);
		}
		fs.writeFileSync(path, index);
	});
	console.log(path);
}
function handleData(data: IClassInfo) {
	if (!fs.existsSync(outPath)) {
		fs.mkdirSync(outPath);
	}
	if (data.folder) {
		if (!fs.existsSync(outPath + data.folder + "/")) {
			fs.mkdirSync(outPath + data.folder + "/");
		}
	}

	let dts = "";
	let level = 0;
	dts += createDes(data.descriptions, level);
	dts += getLevelSpace(level) + "interface " + data.name + " {\n";
	level++; {
		for (let i = 0; i < data.signatures.length; i++) {
			const signature = data.signatures[i];
			if (signature.deprecated) {
				signature.descriptions.push("@deprecated " + signature.deprecated);
			}
			if (signature.validity) {
				signature.descriptions.push("@validity " + signature.validity);
			}
			for (const param of signature.params) {
				signature.descriptions.push("@param " + param.name + " " + param.descriptions[0]);
				for (let j = 1; j < param.descriptions.length; j++) {
					signature.descriptions.push(param.descriptions[j]);
				}
			}
			if (signature.returnsDescription) {
				signature.descriptions.push("@returns " + signature.returnsDescription);
			}
			if (signature.example) {
				signature.descriptions.push("@example");
				signature.descriptions.push(signature.example);
			}
			dts += createDes(signature.descriptions, level);
			dts += getLevelSpace(level) + signature.text + ": " + signature.returns + "\n"
		}
	} level--;
	dts += getLevelSpace(level) + "}\n";

	const path = outPath + (data.folder ? data.folder + "/" : "") + data.name + ".d.ts";
	console.log(path);
	fs.writeFileSync(path, dts);
}
function convertType(t: string): string {
	for (let i = 0; i < typeConverts.length; i++) {
		const convert = typeConverts[i];
		if (t == convert.from) {
			return convert.to;
		}
	}
	return t;
}
function createDes(dess: string[], level: number) {
	if (dess.length == 0) {
		return "";
	}
	for (let i = 0; i < dess.length; i++) {
		if (dess[i] == "e.g.")
			dess[i] = "@example";
	}
	let des = getLevelSpace(level) + "/**\n";
	for (let i = 0; i < dess.length; i++) {
		if (ingnoreDescriptions.indexOf(dess[i]) >= 0) continue;
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

build();
