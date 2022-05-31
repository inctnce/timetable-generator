import { Stack } from "@mui/material";
import React from "react";
import Filter from "./Filter";
import Table from "./Table";

const Timetable: React.FC = () => {

    return (
        <Stack width="100%" spacing={2}>
            <Filter />
            <Table />
        </Stack>
    )
}

export default Timetable;