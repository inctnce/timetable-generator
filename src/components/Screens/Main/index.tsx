import { Fade, Stack } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useAppSelector } from "../../../store/hooks"
import Empty from "./Empty"
import Timetable from "./Timetable"

const Main: React.FC = () => {

    const timetable = useAppSelector(({ timetable }) => timetable);

    if (timetable.lessons.length > 0) return (
        <Fade in={timetable.lessons.length > 0}>
            <Box>
                <Timetable />
            </Box>
        </Fade>
    )

    return <Empty />
}

export default Main;