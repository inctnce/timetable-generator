import { Paper, Stack, StackProps, Typography, useTheme } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { manualFormSlice } from "../../store/reducers/manualForm";

type WorkdaySwitchProps = {
    label: string;
    selected: boolean;
}

const WorkdaySwitch: React.FC<WorkdaySwitchProps> = ({ label, selected }) => {

    const theme = useTheme();
    const dispatch = useAppDispatch();

    const handleSwitchClick = () => {
        if (selected) return dispatch(manualFormSlice.actions.deleteWorkday(label));
        dispatch(manualFormSlice.actions.addWorkday(label))
    }

    return (
        <Stack
            component={Paper}
            pl={1} pr={1} pb={0} pt={0}
            sx={{
                cursor: "pointer",
                borderRadius: 0.5,
                backgroundColor: selected ? theme.palette.primary.main : theme.palette.background.paper,
                color: selected ? theme.palette.background.paper : theme.palette.primary.main
            }}
            onClick={handleSwitchClick}>
            <Typography>{label}</Typography>
        </Stack>
    )
}

const WorkdaysCard: React.FC<StackProps> = (props) => {

    const manualForm = useAppSelector(({ manualForm }) => manualForm);

    const workdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
    const workdaysSwitches = workdays.map((workday) => (
        <WorkdaySwitch
            key={workday}
            label={workday}
            selected={manualForm.days.findIndex((v) => v === workday) !== -1}
        />
    ))

    return (
        <Paper sx={{ borderRadius: 2 }} >
            <Stack padding={2} spacing={2} width="fit-content" {...props} >
                <Typography variant="h4" >Рабочие дни</Typography>
                <Stack direction="row" spacing={1}>
                    {workdaysSwitches}
                </Stack>
            </Stack>
        </Paper>
    )
}

export default WorkdaysCard