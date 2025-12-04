import * as path from "path";
import { loadFile, logResult } from "./utils";

const NUMBER_OF_DAYS = 4;

const runDay = async (day: number) => {
	const parts = await import(`./day${day}`);
	const input = loadFile(path.join(__dirname, `./day${day}/input.txt`));
	const part1Result = parts.part1(input);
	const part2Result = parts.part2(input);

	logResult(day, 1, part1Result);
	logResult(day, 2, part2Result);
};

Promise.all(
	Array(NUMBER_OF_DAYS)
		.fill("")
		.map((_, i) => {
			runDay(i + 1);
		}),
);
