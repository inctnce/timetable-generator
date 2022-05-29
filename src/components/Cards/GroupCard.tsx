import { Stack, Paper, Typography, TextField } from "@mui/material";
import React from "react";

const GroupCard: React.FC = () => {
    return (
        <Paper sx={{ borderRadius: 2 }} >
            <Stack padding={2} spacing={2}>
                <Typography variant="h4" component="div" >Номер</Typography>
                <TextField size="small" />
            </Stack>
        </Paper>
    )
}

export default GroupCard