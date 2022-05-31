import { Stack } from "@mui/material"
import React from "react"
import { useAppSelector } from "../../../store/hooks"
import Empty from "./Empty"
import Timetable from "./Timetable"

const Main: React.FC = () => {

    const timetable = useAppSelector(({ timetable }) => timetable);

    if (timetable.lessons.length > 0) return <Timetable />
    return <Empty />
}

export default Main;