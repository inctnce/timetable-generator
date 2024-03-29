import { Stack } from "@mui/material";
import React from "react";
import Week from "./Week";
import FilterType from "./FilterType";
import FilterValue from "./FilterValue";

const Filter: React.FC = () => {
    return (
        <Stack spacing={2} direction="row" >
            <FilterType />
            <FilterValue />
            <Stack flex={1} justifyContent="center" alignItems="end">
                <Week />
            </Stack>
        </Stack>
    )
}

export default Filter;