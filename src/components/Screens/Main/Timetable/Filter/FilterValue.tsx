import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks"
import { timetableSlice } from "../../../../../store/reducers/timetable";

const FilterValue: React.FC = () => {

    const dispatch = useAppDispatch()
    const { filter } = useAppSelector(({ timetable }) => timetable);

    const selectItems = filter.items.map((item) => <MenuItem key={item} value={item} >{item}</MenuItem>);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(timetableSlice.actions.setFilterSelected(event.target.value as string))
    }

    return (
        <Select
            value={filter.selected}
            onChange={handleChange}
            size="small"
            MenuProps={{
                PaperProps: {
                    sx: {
                        maxHeight: 300,
                    }
                }
            }}
            autoWidth
        >
            {selectItems}
        </Select>
    )
}

export default FilterValue