import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ManualFormStepper from "../../Stepper/Stepper";
import TimeForm from "./TimeForm";
import { manualFormSlice } from "../../../store/reducers/manualForm";
import RoomForm from "./RoomsForm";
import TutorsForm from "./TutorsForm";

const ManualForm: React.FC = () => {

    const steps = [<TimeForm />, <RoomForm />, <TutorsForm />];
    const manualForm = useAppSelector(({ manualForm }) => manualForm);
    const dispatch = useAppDispatch();

    const handleBackButton = () => dispatch(manualFormSlice.actions.setStep(manualForm.activeStep - 1));
    const handleNextButton = () => dispatch(manualFormSlice.actions.setStep(manualForm.activeStep + 1));


    return (
        <Stack spacing={2} width="100%"  >
            <ManualFormStepper />
            {steps[manualForm.activeStep]}
            <Stack direction="row" >
                <Button variant="text" startIcon={<ArrowBackIos />} onClick={handleBackButton} >
                    Назад
                </Button>
                <Stack sx={{ flex: 1 }} ></Stack>
                <Button variant="text" endIcon={<ArrowForwardIos />} onClick={handleNextButton} >
                    Далее
                </Button>
            </Stack>
        </Stack>
    )
}

export default ManualForm;