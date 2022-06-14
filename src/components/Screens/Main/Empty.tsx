import { Stack, Typography } from "@mui/material"
import React from "react"
import { ReactComponent as NoTimetablesFigure } from "../../../assets/no-timetables.svg"

const Empty: React.FC = () => (
    <Stack spacing={2} flex={1} alignItems="center" justifyContent="center">
        <NoTimetablesFigure height="auto" width="auto" />
        <Typography variant="h2">У вас пока нет расписаний</Typography>
    </Stack>
)

export default Empty;