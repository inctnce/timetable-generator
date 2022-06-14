import { Collapse, Stack } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import TutorCard from "../../Cards/TutorCard";
import { TransitionGroup } from 'react-transition-group';

const TutorsForm: React.FC = () => {

    const manualForm = useAppSelector((state) => state.manualForm);

    const tutors = [
        ...Array.from(manualForm.tutors).map((name) => (
            <Collapse orientation="horizontal" key={name}><TutorCard name={name} button="clear" /></Collapse>
        )),
        <TutorCard key={""} name={""} button="add" />
    ]

    return (
        <Stack component={TransitionGroup} direction="row" spacing={2} >
            {tutors}
        </Stack>
    )
}

export default TutorsForm