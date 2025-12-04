import * as path from "path";
import { describe, expect, it } from "vitest";
import { loadFile } from "../../utils";
import { part1 } from "./part1";
import { part2 } from "./part2";

describe("2024 - Day 1", () => {
	const exampleInput = loadFile(path.join(__dirname, "./input.example.txt"));
	const realInput = loadFile(path.join(__dirname, "./input.txt"));

	describe("Part 1", () => {
		it("returns the correct result for the example input", () => {
			expect(part1(exampleInput)).toEqual(11);
		});

		it("returns the correct result for the real input", () => {
			expect(part1(realInput)).toEqual(1590491);
		});
	});

	describe("Part 2", () => {
		it("returns the correct result for the example input", () => {
			expect(part2(exampleInput)).toEqual(31);
		});

		it("returns the correct result for the real input", () => {
			expect(part2(realInput)).toEqual(22588371);
		});
	});
});
