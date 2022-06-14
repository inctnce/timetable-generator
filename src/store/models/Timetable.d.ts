import Data from "../../models/Data";
import Lesson from "../../models/Lesson";

export type FilterType = "groups" | "tutors" | "rooms";

export type Filter = {
	groups: string[];
	tutors: string[];
	rooms: Room[];

	type: FilterType;
	items: string[];
	selected: string;
};

export default interface Timetable {
	data: Data | null;
	lessons: Lesson[];

	filter: Filter;
	week: number;
}
