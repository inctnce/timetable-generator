import { useTheme } from "@mui/system";
import React from "react"
import { useAppSelector } from "../../../../store/hooks";
import LessonCard from "../../../Cards/LessonCard";

const Table: React.FC = () => {

    const theme = useTheme()
    const { data, lessons, filter } = useAppSelector(({ timetable }) => timetable);

    const workdaysRow = [<td key={""} ></ td>]
    if (data) for (const day of data?.days) workdaysRow.push(
        <td
            style={{
                textAlign: "center",
                paddingBottom: theme.spacing(2)
            }}
            key={day} >
            {day}
        </td>);

    const slotsRows: JSX.Element[] = [];
    if (data) {
        for (const slot of data?.slots) {
            const row: JSX.Element[] = [
                <td
                    key={slot}
                    style={{ textAlign: "left", paddingRight: theme.spacing(2), width: "10%" }} >
                    {slot}
                </td>
            ];
            for (const day of data?.days) {
                row.push(
                    ...lessons
                        .filter((lesson) => {
                            const comparator = {
                                "groups": lesson.groups.includes(filter.selected),
                                "tutors": lesson.tutor === filter.selected,
                                "rooms": lesson.room.name === filter.selected
                            }
                            return day === lesson.day && slot === lesson.time && comparator[filter.type]
                        })
                        .map((lesson) => (
                            <td key={lesson.name + lesson.day + lesson.time}>
                                <LessonCard
                                    {...lesson}
                                    room={lesson.room.name}
                                    foreground={lesson.foreground}
                                    background={lesson.background}
                                />
                            </td>
                        )));
            }
            slotsRows.push(<tr key={slot}>{row}</tr>)
        }
    }

    return (
        <table style={{ tableLayout: "fixed", width: "100%", height: "100%" }} >
            <tbody>
                <tr>{workdaysRow}</tr>
                {slotsRows}
            </tbody>
        </table>
    )
}

export default Table;