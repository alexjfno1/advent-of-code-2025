export const part1 = (input: Array<string>): number => {
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

	const sortedList1 = list1.sort((a, b) => a - b);
	const sortedList2 = list2.sort((a, b) => a - b);

	return sortedList1.reduce((sum, id, index) => {
		const diff = id - sortedList2[index]!;
		return sum + Math.abs(diff);
	}, 0);
};
