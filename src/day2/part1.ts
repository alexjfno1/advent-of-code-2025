export const part1 = (input: Array<string>): number => {
	const ranges = input[0]!.split(",");
	const invalidIDs: Array<number> = [];

	ranges.forEach((range) => {
		const [start, end] = range.split("-") as [string, string];

		for (let i = parseInt(start); i <= parseInt(end); i++) {
			const numberAsString = i.toString();
			const numberLength = numberAsString.length;

			if (numberLength % 2 === 0) {
				const firstHalf = numberAsString.substring(0, numberLength / 2);
				const secondHalf = numberAsString.substring(
					numberLength / 2,
					numberLength,
				);

				if (firstHalf === secondHalf) {
					invalidIDs.push(i);
				}
			}
		}
	});

	const sumOfIDs = invalidIDs.reduce((sum, id) => sum + id, 0);
	return sumOfIDs;
};
