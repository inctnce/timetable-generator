import { Paper, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
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

    const handleChangeType = (event: React.SyntheticEvent, type: TFilterType) => {
        dispatch(timetableSlice.actions.setFilterType(type))
    }

    return (
        <Paper sx={{ width: "fit-content" }} >
            <StyledTabs
                onChange={handleChangeType}
                value={filter.type}>
                <StyledTab value="groups" label="Группа" />
                <StyledTab value="rooms" label="Кабинет" />
                <StyledTab value="tutors" label="Преподаватель" />
            </StyledTabs>
        </Paper>
    )
}

export default FilterType;