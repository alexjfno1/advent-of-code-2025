export const part2 = (input: Array<string>): number => {
	const joltages: Array<number> = [];

	input.forEach((battery) => {
		const numbers = battery.split("");
		const realNums = numbers.map((num) => parseInt(num));
		const totalBatteries = 12;

		const array: Array<string> = [];
		let biggestNumIndex = -1;
		let biggestNumber = -1;

		for (let batNum = 1; batNum <= totalBatteries; batNum++) {
			const furthestBatteryPosition = totalBatteries - batNum;

			for (
				let i = biggestNumIndex + 1;
				i < realNums.length - furthestBatteryPosition;
				i++
			) {
				if (realNums[i]! > biggestNumber) {
					biggestNumber = realNums[i]!;
					biggestNumIndex = i;
				}
			}

			array.push(biggestNumber.toString());
			biggestNumber = -1;
		}

		joltages.push(parseInt(array.join("")));
	});

	const totalJoltage = joltages.reduce((sum, joltage) => sum + joltage, 0);
	return totalJoltage;
};
