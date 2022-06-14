import Slot, { isInstanceOfSlot } from "./Slot";

export default interface Tutor {
	name: string;
	freeTime: Slot[];
}

export function isInstanceOfTutor(arg: any): boolean {
	const { name, freeTime } = arg;
	if (!name || !freeTime) return false;

	if (typeof name !== "string") return false;

	if (!Array.isArray(freeTime)) return false;

	for (const slot of freeTime) {
		if (!isInstanceOfSlot(slot)) return false;
	}

	return true;
}
