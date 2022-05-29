import { Step, StepIconProps, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Check } from "@mui/icons-material";
import { Theme } from "@mui/system";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 8px)',
        right: 'calc(50% + 8px)',
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
    },
}))

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#784af4',
        }),
        '& .CustomStepIcon-completedIcon': {
            backgroundColor: theme.palette.primary.main,
            color: '#784af4',
            fontWeight: "bold",
            width: 16,
            height: 16,
            borderRadius: '50%',
            border: `2px solid ${theme.palette.primary.main}`,
            zIndex: 1,
        },
        '& .CustomStepIcon-circle': {
            width: 16,
            height: 16,
            borderRadius: '50%',
            border: `2px solid ${theme.palette.primary.main}`,
        },
    }),
);

const CustomStepIcon: React.FC<StepIconProps> = (props: StepIconProps) => {
    const { active, completed, className } = props;

    return (
        <CustomStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <div className="CustomStepIcon-completedIcon" />
            ) : (
                <div className="CustomStepIcon-circle" />
            )}
        </CustomStepIconRoot>
    );
}



const ManualFormStepper: React.FC = () => {
    const manualForm = useAppSelector(({ manualForm }) => manualForm)

    const steps = ["Время", "Кабинеты", "Преподаватели", "Группы", "Предметы"]
    const stepsComponents = steps.map((label, index) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
            optional?: React.ReactNode;
        } = {
            
        };
        return (
            <Step key={label} {...stepProps}>
                <StepLabel StepIconComponent={CustomStepIcon} {...labelProps}>{label}</StepLabel>
            </Step>
        );
    })

    return <Stepper connector={<CustomConnector />} activeStep={manualForm.activeStep} alternativeLabel>{stepsComponents}</Stepper>
}

export default ManualFormStepper;