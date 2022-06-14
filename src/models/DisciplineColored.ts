import Discipline, { isInstanceOfDiscipline } from "./Discipline";

type DisciplineColored = Discipline & {
	foreground: string;
	background: string;
};

export function isInstanceOfDisciplineColored(arg: any): boolean {
	const isDiscipline = isInstanceOfDiscipline(arg);

	if (!isDiscipline) return false;

	if (!arg.foreground || !arg.background) return false;

	return true;
}

export default DisciplineColored;
