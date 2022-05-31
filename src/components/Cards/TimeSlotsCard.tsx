import { Add, Clear } from "@mui/icons-material"
import { Collapse, IconButton, Paper, Stack, StackProps, TextField, Typography } from "@mui/material"
import React from "react"
import { TransitionGroup } from 'react-transition-group';
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { manualFormSlice } from "../../store/reducers/manualForm"

const TimeSlotInput: React.FC<{ value: string, button: "add" | "clear" }> = (props) => {
    const [value, setValue] = React.useState(props.value)

    const dispatch = useAppDispatch();

    const validate = () => {
        const timeSlotPattern = /(^$|\d\d:\d\d-\d\d:\d\d)/;
        return !timeSlotPattern.test(value);
    }

    const handleButtonDisable = () => validate() || value.trim() === "";

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && !validate()) handleAddTimeSlot();
        if (e.key === "Delete") handleDeleteTimeSlot();
    }

    const handleAddTimeSlot = () => {
        dispatch(manualFormSlice.actions.addTimeSlot(value));
        setValue("");
    }

    const handleDeleteTimeSlot = () => dispatch(manualFormSlice.actions.deleteTimeSlot(value));

    const endAdornment = props.button === "add"
        ? <IconButton size="small" onClick={handleAddTimeSlot} disabled={handleButtonDisable()}><Add /></IconButton>
        : <IconButton size="small" onClick={handleDeleteTimeSlot} disabled={handleButtonDisable()}><Clear /></IconButton>

    return <TextField
        error={validate()}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="hh:mm-hh:mm"
        value={value}
        InputProps={{
            endAdornment: endAdornment
        }}
    />
}

const TimeSlotsCard: React.FC<StackProps> = (props) => {

    const manualForm = useAppSelector((state) => state.manualForm);
    const timeSlots = [
        ...manualForm.slots
            .map((timeSlot) => (
                <Collapse key={timeSlot} orientation="horizontal" >
                    <TimeSlotInput value={timeSlot} button="clear" />
                </Collapse>)),
        <TimeSlotInput key="" value="" button="add" />
    ]

    return (
        <Stack {...props} component={Paper} padding={2} spacing={2} sx={{ borderRadius: 2, ...props.sx }}>
            <Typography variant="h4" >Временные слоты</Typography>
            <Stack component={TransitionGroup} direction="row" spacing={1} >
                {timeSlots}
            </Stack>
        </Stack >
    )
}

export default TimeSlotsCard