import { Stack, Typography } from "@mui/material"
import React from "react"
import { useAppSelector } from "../../../store/hooks"
import { ReactComponent as NoTimetablesFigure } from "../../../assets/no-timetables.svg"

const Main: React.FC = () => {

    const timetable = useAppSelector(({ app }) => app.timetable)

    if (timetable) return <Stack>Some timetable</Stack>


    return (
        <Stack spacing={2} flex={1} alignItems="center" justifyContent="center">
            <NoTimetablesFigure height="auto" width="auto" style={{ backgroundColor: "beige" }} />
            <Typography variant="h2">У вас пока нет расписаний</Typography>
        </Stack>
    )
}

export default Main