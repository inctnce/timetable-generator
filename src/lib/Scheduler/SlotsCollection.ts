import Slot from "../../models/Slot";

export default class SlotsCollection {
	constructor(private _slots: Slot[]) {}

	get slots(): Slot[] {
		return this._slots;
	}

	get size(): number {
		return this._slots.length;
	}

	getSlotsForDay(day: string, week?: number) {
		if (typeof week === "number") return this._slots.filter((slot) => slot.day === day && slot.week === week);
		return this._slots.filter((slot) => slot.day === day);
	}

	getSlotsForWeek(week: number) {
		return this._slots.filter((slot) => slot.week === week);
	}

	getSlotByIndex(index: number) {
		return this._slots[index];
	}

	getSlotIndex(slot: Slot) {
		if (slot.week)
			return this._slots.findIndex((s) => s.day === slot.day && s.week === slot.week && s.slot === slot.slot);

		return this._slots.findIndex((s) => s.day === slot.day && s.slot === slot.slot);
	}
}
