import DisciplineType from "./DisciplineType";
import Room from "./Room";

export default interface Lesson {
	name: string;
	tutor: string;
	groups: string[];
	type: DisciplineType;
	day: string;
	time: string;
	room: Room;
}
