export const logResult = (
	day: number,
	part: number,
	result: string | number,
): void => {
	console.info("🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁");
	console.info("");
	console.info("🎄", "\t\t\t\t\t", " 🎄");
	console.info("\t", `Day ${day} / Part ${part} Result:`, result);
	console.info("🎁", "\t\t\t\t\t", " 🎁");
	console.info("");
	console.info("🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄 🎁 🎄");
};
