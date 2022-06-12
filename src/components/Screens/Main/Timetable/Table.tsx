import { Fade, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useMemo } from "react"
import { useAppSelector } from "../../../../store/hooks";
import LessonCard from "../../../Cards/LessonCard";

const Table: React.FC = () => {
    const theme = useTheme();
    const { data, lessons, filter, week } = useAppSelector(({ timetable }) => timetable);

    const buildRows = () => {
        const slotsRows = []
        if (data) {
            for (const slot of data?.slots) {
                const row: JSX.Element[] = [
                    <Typography
                        key={slot}
                        component="td"
                        style={{ textAlign: "left", height: `calc(100%/${data.slots.length + 1})` }}
                        variant="body1"
                    >
                        {slot}
                    </Typography>
                ];
                for (const day of data?.days) {

                    const lessonsForDay = lessons
                        .filter((lesson) => {
                            const comparator = {
                                "groups": lesson.groups.includes(filter.selected),
                                "tutors": lesson.tutor.name === filter.selected,
                                "rooms": lesson.room.name === filter.selected
                            }
                            return (
                                week === lesson.week &&
                                day === lesson.day &&
                                slot === lesson.slot &&
                                comparator[filter.type]
                            )
                        })
                        .map((lesson) => (
                            <Fade
                                key={lesson.name + lesson.day + lesson.slot}
                                in={!!(lesson.name + lesson.day + lesson.slot)}
                                timeout={500}
                            >
                                <td>
                                    <LessonCard
                                        {...lesson}
                                        tutor={lesson.tutor.name}
                                        room={lesson.room.name}
                                        foreground={lesson.foreground}
                                        background={lesson.background}
                                    />
                                </td>
                            </Fade >
                        ))

                    if (lessonsForDay.length > 0) row.push(...lessonsForDay);
                    else row.push(<td key={day} ></td>);
                }
                slotsRows.push(<tr key={slot}>{row}</tr>)
            }
        }
        return slotsRows
    }

    const slotsRows: JSX.Element[] = useMemo(buildRows, [data, filter.selected, filter.type, lessons, week]);

    const workdaysRow = [<td key={""} ></ td>]
    if (data) for (const day of data?.days) workdaysRow.push(
        <td
            style={{
                textAlign: "center",
                paddingBottom: theme.spacing(3),
                width: `calc(75%/${data.days.length})`
            }}
            key={day} >
            <Typography variant="h5" >{day}</Typography>
        </td>);




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