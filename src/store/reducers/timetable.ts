import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Data from "../../models/Data";
import Lesson from "../../models/Lesson";
import Timetable, { FilterType } from "../models/Timetable";

const initialState: Timetable = {
	data: null,
	lessons: [],
	filter: { groups: [], tutors: [], rooms: [], type: "groups", items: [], selected: "" },
	week: 0,
};

export const timetableSlice = createSlice({
	name: "timetable",
	initialState,
	reducers: {
		setData: (state: Timetable, action: PayloadAction<Data>) => {
			state.data = action.payload;
		},
		deleteData: (state: Timetable) => {
			state.data = null;
		},
		setLessons: (state: Timetable, action: PayloadAction<Lesson[]>) => {
			const uniqueGroups = new Set<string>();
			const uniqueTutors = new Set<string>();
			for (const lesson of action.payload) {
				for (const group of lesson.groups) uniqueGroups.add(group);
				uniqueTutors.add(lesson.tutor.name);
				state.filter.rooms.push(lesson.room.name);
			}

			state.filter.groups = Array.from(uniqueGroups);
			state.filter.tutors = Array.from(uniqueTutors);

			state.filter.type = "groups";
			state.filter.items = state.filter.groups;
			state.filter.selected = state.filter.groups[0];

			state.lessons = action.payload;
		},
		setFilterType: (state: Timetable, action: PayloadAction<FilterType>) => {
			state.filter.type = action.payload;
			state.filter.items = state.filter[action.payload];
			state.filter.selected = state.filter[action.payload][0];
		},

		setFilterSelected: (state: Timetable, action: PayloadAction<string>) => {
			state.filter.selected = action.payload;
		},

		setWeek: (state: Timetable, action: PayloadAction<number>) => {
			if (state.data && state.week + action.payload > -1)
				state.week = (state.week + action.payload) % state.data?.recurrence;
		},
	},
});

export default timetableSlice.reducer;
