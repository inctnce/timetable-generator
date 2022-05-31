import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks"
import { timetableSlice } from "../../../../../store/reducers/timetable";

const FilterValue = () => {

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
            size="medium"
            sx={{
                width: 300
            }}
            MenuProps={{
                PaperProps: {
                    sx: {
                        maxHeight: 300,
                        width: 300
                    }
                }
            }}
            variant="standard"
            autoWidth
        >
            {selectItems}
        </Select>
    )
}

export default FilterValue