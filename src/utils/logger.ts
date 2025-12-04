export const logResult = (
	day: number,
	part: number,
	result: string | number,
): void => {
	console.info("🎁", `Day ${day} / Part ${part} Result:`, result);
	if (part === 2) {
		console.info("---------------------------------------------");
	}
};
