import { Stack } from "@mui/material"
import React from "react"
import RepeatsCard from "../../Cards/RecurrenceCard"
import TimeSlotsCard from "../../Cards/TimeSlotsCard"
import WorkdaysCard from "../../Cards/WorkdaysCard"

const TimeForm: React.FC = () => {
    return (
        <Stack spacing={2}>
            <WorkdaysCard />
            <Stack direction="row" spacing={2} >
                <RepeatsCard />
                <TimeSlotsCard sx={{ flex: 1 }} />
            </Stack>
        </Stack>
    )
}

export default TimeForm