import * as fs from "fs";

export const loadFile = (filePath: string): Array<string> => {
	const fileContents = fs.readFileSync(filePath).toString();
	const lines = fileContents.split("\n");
	return lines.filter((line) => !!line);
};
