export const part2 = (input: Array<string>): number => {
	let dialPosition = 50;
	let zeroCount = 0;

	input.forEach((instruction) => {
		const direction = instruction.substring(0, 1);
		const count = parseInt(instruction.substring(1));

		for (let i = 0; i < count; i++) {
			if (direction === "R") {
				dialPosition === 99 ? (dialPosition = 0) : (dialPosition += 1);
			}

			if (direction === "L") {
				dialPosition === 0 ? (dialPosition = 99) : (dialPosition -= 1);
			}

			if (dialPosition === 0) {
				zeroCount += 1;
			}
		}
	});

	return zeroCount;
};
