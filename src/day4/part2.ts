const removeAccessibleRolls = (
	shelevesInput: Array<Array<string>>,
): [Array<Array<string>>, number] => {
	const sheleves = [...shelevesInput];
	let accessibleRoles = 0;
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
				sheleves[shelfIndex]![itemIndex] = ".";
			}
		});
	});

	return [sheleves, accessibleRoles];
};

export const part2 = (input: Array<string>): number => {
	const sheleves: Array<Array<string>> = input.map((row) => row.split(""));

	let lastRoleCount = 0;
	let lastShevles = sheleves;
	let total = 0;

	do {
		const [sheleves, accessibleRoles] = removeAccessibleRolls(lastShevles);
		lastRoleCount = accessibleRoles;
		lastShevles = sheleves;

		total = total += accessibleRoles;
	} while (lastRoleCount > 0);

	return total;
};
