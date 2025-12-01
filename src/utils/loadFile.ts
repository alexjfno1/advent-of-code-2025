import * as fs from "fs";

export const loadFile = (filePath: string): Array<string> => {
	const fileContents = fs.readFileSync(filePath).toString();
	return fileContents.split("\n");
};
