import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import App from "../models/App";

const initialState: App = {
	loading: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {},
});

export default appSlice.reducer;
