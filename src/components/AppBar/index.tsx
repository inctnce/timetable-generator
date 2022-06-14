import { GitHub } from "@mui/icons-material";
import { Box, Fade, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import AddTimetableButton from "./AddTimetableButton";
import ExportButton from "./ExportButton";

const AppBar: React.FC = () => {
    const theme = useTheme();

    const { lessons } = useAppSelector(({ timetable }) => timetable)

    return (
        <Stack bgcolor={theme.palette.background.paper} alignItems="center" direction="row" width="100vw" spacing={1} pl={3} pr={3} pt={1} pb={1} >
            <Typography variant="h5" sx={{ flex: 1 }} >Генератор расписаний</Typography>
            <Fade in={lessons.length > 0} >
                <Box>
                    <ExportButton />
                </Box>
            </Fade>
            <AddTimetableButton />
            <IconButton size="small" component="a" href={"https://github.com/inctnce/timetable-generator"} target="_blank" rel="noreferrer">
                <GitHub color="primary" />
            </IconButton>
        </Stack>
    )
}

export default AppBar