import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import app from "./reducers/app";
import timetable from "./reducers/timetable";
import manualForm from "./reducers/manualForm";
import { enableMapSet } from "immer";

enableMapSet();

export const store = configureStore({
	reducer: {
		app,
		timetable,
		manualForm,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
