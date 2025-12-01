import * as path from "path";
import { loadFile, logResult } from "../utils";
import { part1 } from "./part1";
import { part2 } from "./part2";

const day1Input = loadFile(path.join(__dirname, "./input.txt"));
const part1Result = part1(day1Input);
const part2Result = part2(day1Input);

logResult(1, 1, part1Result);
logResult(1, 2, part2Result);
