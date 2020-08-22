import { JSDOM } from 'jsdom';
import { convertType, wirteReferencesDts, handleDocClass, IDocClass } from "./utils";

const webUrl = "https://docs.gamesparks.com/api-documentation/";
const outPath = "./typings/realtime-api/";
const baseUrl = "https://docs.gamesparks.com";
const baseHref = "/api-documentation/realtime-api/";
const baseMenuTitle = "Realtime API";

async function build() {
	console.log("# Realtime Api");
	const dom = await JSDOM.fromURL(webUrl);

	const subMenus = dom.window.document.getElementsByClassName("sub-menu ");
	const subMenuPromises = [];
	for (let i = 0; i < subMenus.length; i++) {
		const subMenu = subMenus[i];
		subMenuPromises.push(handleSubMenu(subMenu));
	}
	await Promise.all(subMenuPromises)
	wirteReferencesDts(outPath);
}
async function handleSubMenu(subMenu: Element) {
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

	const c: IDocClass = {
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
			const parsStr = signature
				.split("(").slice(1).join("(")
				.split(")").slice(0, -1).join(")");
			if (parsStr != "") {
				const pars = parsStr.split(", ");
				for (let k = 0; k < pars.length; k++) {
					const temp = pars[k].split(" ");
					const name = temp.pop();
					const type = temp.join(" ");
					pars[k] = name + ": " + convertType(type);
				}
				signature = signature.split("(")[0] + "(" + pars.join(", ") + ")";
			}
			// signature = signature.replace("fn() paramName, number ms", "paramName: fn, ms: number"); // bug fix
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
		if (childNode.localName == "em" && childNode.textContent == "returns") {
			const next_1 = content.childNodes[j + 1] as Element;
			const next_2 = content.childNodes[j + 2] as Element;
			if (next_2.localName == "a") {
				const next_3 = content.childNodes[j + 3] as Element;
				const returns = next_2.textContent! + next_3.textContent!;
				lastSignature.returns = convertType(returns);
				j += 2;
			}
			else {
				let returns = next_1.textContent!;
				returns = returns.substring(1, returns.length); // " number" to "number"
				lastSignature.returns = convertType(returns);
				j += 1;
			}
			// description
			j += 2;
			const descriptionNode = content.childNodes[j];
			let description = descriptionNode.textContent!;
			description = description.substring(1, description.length); // remove "\n"
			if (description) {
				lastSignature.descriptions = description.split("\n");
				lastSignature.lastDescriptionIndex = j;
			}
		}
	}
	handleDocClass(outPath, c);
}

build();
