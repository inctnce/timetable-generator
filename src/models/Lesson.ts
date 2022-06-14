import DisciplineType from "./DisciplineType";
import Room from "./Room";
import Slot from "./Slot";
import Tutor from "./Tutor";

export default interface Lesson extends Slot {
	name: string;
	tutor: Tutor;
	groups: string[];
	type: DisciplineType;
	foreground: string;
	background: string;
	room: Room;
}
