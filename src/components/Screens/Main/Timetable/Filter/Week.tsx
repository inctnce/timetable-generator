import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { timetableSlice } from "../../../../../store/reducers/timetable";

const Week: React.FC = () => {

    const dispatch = useAppDispatch();
    const { week } = useAppSelector(({ timetable }) => timetable);

    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton size="small" onClick={() => dispatch(timetableSlice.actions.setWeek(-1))}>
                <ArrowBackIos fontSize="small" />
            </IconButton>
            <Typography variant="h5" >Неделя {week + 1}</Typography>
            <IconButton size="small" onClick={() => dispatch(timetableSlice.actions.setWeek(1))}>
                <ArrowForwardIos fontSize="small" />
            </IconButton>
        </Stack>
    )
}


export default Week;