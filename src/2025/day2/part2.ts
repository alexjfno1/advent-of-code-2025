const splitNumberIntoParts = (
	partLength: number,
	numberString: string,
): Array<string> => {
	const parts: Array<string> = [];

	for (let i = 0; i < numberString.length; i = i + partLength) {
		parts.push(numberString.slice(i, i + partLength));
	}

	return parts;
};

export const part2 = (input: Array<string>): number => {
	const ranges = input[0]!.split(",");
	const invalidIDs: Array<number> = [];

	ranges.forEach((range) => {
		const [start, end] = range.split("-") as [string, string];

		for (let i = parseInt(start); i <= parseInt(end); i++) {
			const numberAsString = i.toString();
			const numberLength = numberAsString.length;
			const numberSplits: Array<[number, string]> = [];

			for (let y = 1; y <= numberLength - 1; y++) {
				if (numberLength % y === 0) {
					numberSplits.push([y, numberAsString]);
				}
			}

			for (let x = 0; x < numberSplits.length; x++) {
				const numberParts = splitNumberIntoParts(
					numberSplits[x]![0],
					numberSplits[x]![1],
				);

				if (numberParts.every((num) => num === numberParts[0])) {
					invalidIDs.push(i);
					break;
				}
			}
		}
	});

	const sumOfIDs = invalidIDs.reduce((sum, id) => sum + id, 0);
	return sumOfIDs;
};
