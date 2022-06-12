import { GitHub } from "@mui/icons-material";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import AddTimetableButton from "./AddTimetableButton";

const AppBar: React.FC = () => {
    const theme = useTheme();

    return (
        <Stack bgcolor={theme.palette.background.paper} alignItems="center" direction="row" width="100vw" spacing={1} pl={3} pr={3} pt={1} pb={1} >
            <Typography variant="h5" sx={{ flex: 1 }} >Генератор расписаний</Typography>
            <AddTimetableButton />
            <IconButton size="small" component="a" href={"https://github.com/inctnce/timetable-generator"} target="_blank" rel="noreferrer">
                <GitHub color="primary" />
            </IconButton>
        </Stack>
    )
}

export default AppBar