export const part1 = (input: Array<string>): number => {
	const availableIngredientsIndex = input.findIndex(
		(line) => !line.includes("-"),
	);
	const freshIngredientRanges = input.slice(0, availableIngredientsIndex);
	const availableIngredients = input.slice(
		availableIngredientsIndex,
		input.length,
	);

	const ranges: Array<[number, number]> = freshIngredientRanges.map((range) => {
		const [start, end] = range.split("-");
		return [parseInt(start!), parseInt(end!)];
	});

	const isInRange = (id: number): boolean => {
		let inRange = false;

		for (const range in ranges) {
			if (id >= ranges[range]![0] && id <= ranges[range]![1]) {
				inRange = true;
				break;
			}
		}

		return inRange;
	};

	return availableIngredients.reduce((sum, id) => {
		if (isInRange(parseInt(id))) {
			return sum + 1;
		}

		return sum;
	}, 0);
};
