export const part2 = (input: Array<string>): number => {
	const locationIDs = input.map((line) =>
		line
			.split(" ")
			.filter((line) => !!line)
			.map((id) => parseInt(id)),
	);

	const list1: Array<number> = [];
	const list2: Array<number> = [];

	locationIDs.forEach((ids) => {
		list1.push(ids[0]!);
		list2.push(ids[1]!);
	});

	return list1.reduce((sum, id) => {
		const multiplier = list2.filter((num) => num === id).length;
		return sum + id * multiplier;
	}, 0);
};
