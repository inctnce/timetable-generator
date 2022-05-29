type DisciplineType = "lecture" | "workshop";

export function isInstanceOfDisciplineType(arg: any): boolean {
	return arg === "lecture" || arg === "workshop";
}

export default DisciplineType;
