import * as glob from "glob";
import * as fs from "fs";
import * as path from "upath";

export interface IDocClass {
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

const ingnoreDescriptions = [
	"@returns example",
];
// JSON is exist of es2015
const typeConvertMap: { from: string, to: string, }[] = [
	{ from: "JSON", to: "any" },
	{ from: "JSON[]", to: "any[]" },
	{ from: "fn()", to: "() => void" },
	{ from: "fn(packet: RTPacket)", to: "(packet: RTPacket) => void" },
	{ from: "fn(player: RTPlayer)", to: "(player: RTPlayer) => void" },
];

export function createDescription(dess: string[], level: number) {
	if (dess.length == 0) {
		return "";
	}
	for (let i = 0; i < dess.length; i++) {
		if (dess[i] == "e.g.")
			dess[i] = "@example";
	}
	let des = createIndent(level) + "/**\n";
	for (let i = 0; i < dess.length; i++) {
		if (ingnoreDescriptions.indexOf(dess[i]) >= 0) continue;
		des += createIndent(level) + " * " + dess[i] + "\n";
	}
	des += createIndent(level) + " */\n"
	return des;
}
export function createIndent(level: number) {
	let space = "";
	while (level > 0) {
		level--;
		space += "    ";
	}
	return space;
}
export function convertType(t: string): string {
	for (let i = 0; i < typeConvertMap.length; i++) {
		const convert = typeConvertMap[i];
		if (t == convert.from) {
			return convert.to;
		}
	}
	return t;
}
export function wirteReferencesDts(outPath: string) {
	const outFile = path.join(outPath, "references.d.ts");
	glob(path.join(outPath, "**/*.d.ts"), (err, files) => {
		let index = "";
		for (const file of files) {
			if (path.resolve(file) !== path.resolve(outFile)) {
				index += `/// <reference path=\"${path.relative(outPath, file)}\" />\n`;
			}
		}
		fs.writeFileSync(outFile, index);
	});
	console.log(outFile);
}
export function handleDocClass(outPath: string, data: IDocClass) {
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
	dts += createDescription(data.descriptions, level);
	dts += createIndent(level) + "interface " + data.name + " {\n";
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
			dts += createDescription(signature.descriptions, level);
			dts += createIndent(level) + signature.text + ": " + signature.returns + "\n"
		}
	} level--;
	dts += createIndent(level) + "}\n";

	const path = outPath + (data.folder ? data.folder + "/" : "") + data.name + ".d.ts";
	console.log(path);
	fs.writeFileSync(path, dts);
}
