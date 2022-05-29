import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Timetable from "../../models/Timetable";

const initialState: Timetable = {};

export const timetableSlice = createSlice({
	name: "timetable",
	initialState,
	reducers: {},
});

export default timetableSlice.reducer;
