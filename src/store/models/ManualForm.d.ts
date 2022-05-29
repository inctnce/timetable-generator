import Room from "../../models/Room";
import Tutor from "../../models/Tutor";

export default interface ManualForm {
	activeStep: number;
	workdays: string[];
	timeSlots: string[];
	recurrence: number;
	rooms: Room[];
	tutors: string[];
}
