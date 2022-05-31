import DisciplineColored, { isInstanceOfDisciplineColored } from "./DisciplineColored";
import Room, { isInstanceOfRoom } from "./Room";

export default interface Data {
	days: string[];
	slots: string[];
	recurrence: number;
	rooms: Room[];
	disciplines: DisciplineColored[];
}

export function isInstanceOfData(arg: any): boolean {
	const { days, slots, recurrence, rooms, disciplines } = arg;
	if (days && slots && recurrence && rooms && disciplines) {
		if (!Array.isArray(days)) return false;
		for (const day of days) if (typeof day !== "string") return false;

		if (!Array.isArray(slots)) return false;
		for (const slot of slots) if (typeof slot !== "string") return false;

		if (typeof recurrence !== "number") return false;

		if (!Array.isArray(rooms)) return false;
		for (const room of rooms) if (!isInstanceOfRoom(room)) return false;

		if (!Array.isArray(disciplines)) return false;
		for (const discipline of disciplines) if (!isInstanceOfDisciplineColored(discipline)) return false;

		return true;
	}

	return false;
}
