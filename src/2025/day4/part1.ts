export const part1 = (input: Array<string>): number => {
	let accessibleRoles = 0;

	const sheleves: Array<Array<string>> = input.map((row) => row.split(""));

	const isRollAccessible = (shelfIndex: number, itemIndex: number): boolean => {
		const ajecentItems: Array<[number, number]> = [
			[shelfIndex - 1, itemIndex - 1],
			[shelfIndex - 1, itemIndex],
			[shelfIndex - 1, itemIndex + 1],
			[shelfIndex, itemIndex - 1],
			[shelfIndex, itemIndex + 1],
			[shelfIndex + 1, itemIndex - 1],
			[shelfIndex + 1, itemIndex],
			[shelfIndex + 1, itemIndex + 1],
		];

		const validItemPositions = ajecentItems.filter(
			(item) =>
				item.every((i) => i >= 0) &&
				item[0] <= sheleves.length - 1 &&
				item[1] <= sheleves[item[0]]!.length,
		);

		const numberOfRollsAjacent = validItemPositions.reduce((sum, item) => {
			if (sheleves[item[0]]![item[1]] === "@") {
				return sum + 1;
			}

			return sum;
		}, 0);

		return numberOfRollsAjacent < 4;
	};

	sheleves.forEach((shelf, shelfIndex) => {
		shelf.forEach((item, itemIndex) => {
			if (item === "@" && isRollAccessible(shelfIndex, itemIndex)) {
				accessibleRoles = accessibleRoles + 1;
			}
		});
	});

	return accessibleRoles;
};
