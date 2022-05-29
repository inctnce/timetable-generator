import DisciplineType, { isInstanceOfDisciplineType } from "./DisciplineType";

export default interface Room {
	name: string;
	type: DisciplineType;
	equipment: string[];
}

export function isInstanceOfRoom(arg: any):  boolean {
	const { name, type, equipment } = arg;

	if (name && type && equipment) {
		if (typeof name !== "string") return false;
		if (!isInstanceOfDisciplineType(type)) return false;

		if (!Array.isArray(equipment)) return false;
		for (const tool of equipment) if (typeof tool !== "string") return false;

		return true;
	}

	return false;
}
