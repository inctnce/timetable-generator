import { MenuItem, Paper, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { manualFormSlice } from "../../store/reducers/manualForm";

const RepeatsCard: React.FC = () => {

    const dispatch = useAppDispatch()
    const { recurrence } = useAppSelector((state) => state.manualForm);

    const handleRecurrenceChange = (event: SelectChangeEvent) => {
        dispatch(manualFormSlice.actions.setRecurrence(Number(event.target.value)))
    }

    const values = [1, 2, 3, 4].map((v) => <MenuItem key={v} value={v} >{v}</MenuItem>)
    return (
        <Stack component={Paper} padding={2} spacing={2} sx={{ borderRadius: 2 }} >
            <Typography variant="h4">Повтор</Typography>
            <Select
                size="small"
                sx={{ minWidth: 100 }}
                value={recurrence.toString()}
                onChange={handleRecurrenceChange}
            >
                {values}
            </Select>
        </Stack>
    )
}

export default RepeatsCard;