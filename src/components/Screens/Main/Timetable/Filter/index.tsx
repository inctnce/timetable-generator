import { Stack } from "@mui/material";
import React from "react";
import FilterType from "./FilterType";
import FilterValue from "./FilterValue";

const Filter: React.FC = () => {
    return (
        <Stack spacing={2}>
            <FilterType />
            <FilterValue />
        </Stack>
    )
}

export default Filter;