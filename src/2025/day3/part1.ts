export const part1 = (input: Array<string>): number => {
	const joltages: Array<number> = [];

	input.forEach((battery) => {
		const numbers = battery.split("");
		const realNumbers = numbers.map((num) => parseInt(num));

		let biggestNumber = realNumbers[0]!;
		let biggestNumberIndex = 0;
		for (let i = 1; i < realNumbers.length - 1; i++) {
			if (realNumbers[i]! > biggestNumber) {
				biggestNumber = realNumbers[i]!;
				biggestNumberIndex = i;
			}
		}

		let secondBiggestNumber = realNumbers[biggestNumberIndex + 1]!;
		let secondBiggestNumberIndex = biggestNumberIndex + 1;
		for (let i = biggestNumberIndex + 1; i < realNumbers.length; i++) {
			if (realNumbers[i]! > secondBiggestNumber) {
				secondBiggestNumber = realNumbers[i]!;
				secondBiggestNumberIndex = i;
			}
		}

		joltages.push(parseInt(`${biggestNumber}${secondBiggestNumber}`));
	});

	const totalJoltage = joltages.reduce((sum, joltage) => sum + joltage, 0);
	return totalJoltage;
};
