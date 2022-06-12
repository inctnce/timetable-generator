import { MenuItem, Paper, Select, SelectChangeEvent, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { FilterType as TFilterType } from "../../../../../store/models/Timetable";
import { timetableSlice } from "../../../../../store/reducers/timetable";


const StyledTabs = styled((props: TabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <div className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        height: "100vh",
        width: '100%',
        backgroundColor: 'red',
    },
});

const StyledTab = styled((props: TabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    color: theme.palette.primary.main,
    '&.Mui-selected': {
        color: "black",
        // backgroundColor: theme.palette.primary.main 
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'red',
    },
}));

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