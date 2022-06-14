export default interface Slot {
	week?: number;
	day: string;
	slot: string;
}

export function isInstanceOfSlot(arg: any): boolean {
	const { week, day, slot } = arg;

	if (week && typeof week !== "number") return false;

	if (!day) return false;
	if (typeof day !== "string") return false;

	if (!slot) return false;
	if (typeof slot !== "string") return false;

	return true;
}
