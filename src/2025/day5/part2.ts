export const part2 = (input: Array<string>): number => {
	const availableIngredientsIndex = input.findIndex(
		(line) => !line.includes("-"),
	);
	const freshIngredientRanges = input.slice(0, availableIngredientsIndex);
	const combinedRanges = freshIngredientRanges
		.reduce<Array<[number, number]>>((ranges, range) => {
			const [start, end] = range.split("-");
			return [...ranges, [parseInt(start!), parseInt(end!)]];
		}, [])
		.sort((a, b) => a[0] - b[0]);

	const mergeRanges = (ranges: Array<[number, number]>) => {
		let newRanges = [...ranges];
		let hasMerged = false;

		for (let i = 0; i < ranges.length - 1; i++) {
			const nextRange = ranges[i + 1];

			if (nextRange && ranges[i]![1] >= nextRange[0]) {
				const lowerRangeValue = newRanges[i]![0];
				const higherRangeValue = Math.max(
					newRanges[i]![1],
					newRanges[i + 1]![1],
				);

				newRanges = [
					...(i > 0 ? newRanges.slice(0, i) : []),
					[lowerRangeValue, higherRangeValue],
					...newRanges.slice(i + 2, newRanges.length),
				];

				hasMerged = true;
				break;
			}
		}

		if (hasMerged) {
			return mergeRanges(newRanges);
		}

		return newRanges;
	};

	return mergeRanges(combinedRanges).reduce((sum, range) => {
		return sum + range[1] - range[0] + 1;
	}, 0);
};
