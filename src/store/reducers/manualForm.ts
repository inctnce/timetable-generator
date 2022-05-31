import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Room from "../../models/Room";
import Tutor from "../../models/Tutor";
import ManualForm from "../models/ManualForm";

const initialState: ManualForm = {
	activeStep: 0,
	days: [],
	slots: [],
	recurrence: 1,
	rooms: [],
	tutors: [],
};

export const manualFormSlice = createSlice({
	name: "manualForm",
	initialState,
	reducers: {
		setStep: (state: ManualForm, action: PayloadAction<number>) => {
			state.activeStep = action.payload;
		},
		addWorkday: (state: ManualForm, action: PayloadAction<string>) => {
			state.days.push(action.payload);
		},
		deleteWorkday: (state: ManualForm, action: PayloadAction<string>) => {
			const index = state.days.findIndex((item) => item === action.payload);
			if (index !== -1) state.days.splice(index, 1);
		},
		addTimeSlot: (state: ManualForm, action: PayloadAction<string>) => {
			state.slots.push(action.payload);
		},
		deleteTimeSlot: (state: ManualForm, action: PayloadAction<string>) => {
			const index = state.slots.findIndex((item) => item === action.payload);
			if (index !== -1) state.slots.splice(index, 1);
		},
		setRecurrence: (state: ManualForm, action: PayloadAction<number>) => {
			state.recurrence = action.payload;
		},
		addRoom: (state: ManualForm, action: PayloadAction<Room>) => {
			state.rooms.push(action.payload);
		},
		deleteRoom: (state: ManualForm, action: PayloadAction<Room>) => {
			const index = state.rooms.findIndex((item) => item.name === action.payload.name);
			if (index !== -1) state.rooms.splice(index, 1);
		},
		addTutor: (state: ManualForm, action: PayloadAction<string>) => {
			state.tutors.push(action.payload);
		},
		deleteTutor: (state: ManualForm, action: PayloadAction<string>) => {
			const index = state.tutors.findIndex((item) => item === action.payload);
			if (index !== -1) state.tutors.splice(index, 1);
		},
	},
});

export default manualFormSlice.reducer;
