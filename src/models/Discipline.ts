import DisciplineType, { isInstanceOfDisciplineType } from "./DisciplineType";
import { isInstanceOfTutor } from "./Tutor";

export default interface Discipline {
	name: string;
	tutor: string;
	groups: string[];
	type: DisciplineType;
	recurrence: number;
}

export function isInstanceOfDiscipline(arg: any): boolean {
	const { name, tutor, groups, type, recurrence } = arg;
	if (name && tutor && groups && type && recurrence) {
		if (typeof name !== "string") return false;

		if (!isInstanceOfTutor(tutor)) return false;

		if (!Array.isArray(groups)) return false;
		for (const group of groups) if (typeof group !== "string") return false;

		if (!isInstanceOfDisciplineType(type)) return false;

		if (typeof recurrence !== "number") return false;

		return true;
	}

	return false;
}
