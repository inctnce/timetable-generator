import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { FilterType as TFilterType } from "../../../../../store/models/Timetable";
import { timetableSlice } from "../../../../../store/reducers/timetable";

const FilterType: React.FC = () => {

    const dispatch = useAppDispatch();
    const { filter } = useAppSelector(({ timetable }) => timetable);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(timetableSlice.actions.setFilterType(event.target.value as TFilterType))
    }



    return (
        <Select
            value={filter.type}
            onChange={handleChange}
            size="small"
        >
            <MenuItem value="groups" >Группы</MenuItem>
            <MenuItem value="tutors" >Преподаватели</MenuItem>
            <MenuItem value="rooms" >Кабинеты</MenuItem>
        </Select>
    )
}

export default FilterType;