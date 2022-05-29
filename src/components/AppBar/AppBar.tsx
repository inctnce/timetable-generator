import { Add, GitHub, Search } from "@mui/icons-material";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import React from "react";

const AppBar: React.FC = () => {
    const theme = useTheme();
    let navigate = useNavigate();

    return (
        <Stack bgcolor={theme.palette.background.paper} alignItems="center" direction="row" width="100vw" spacing={1} pl={2} pr={2} pt={1} pb={1} >
            <Typography variant="h5" sx={{ flex: 1 }} >Генератор расписаний</Typography>
            <IconButton size="small" onClick={() => navigate("form")} >
                <Add />
            </IconButton>
            <IconButton size="small" component="a" href={"https://github.com/inctnce/timetable-generator"} target="_blank" rel="noreferrer">
                <GitHub color="primary" />
            </IconButton>
        </Stack>
    )
}

export default AppBar