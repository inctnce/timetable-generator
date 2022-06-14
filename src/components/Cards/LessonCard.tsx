import { Paper, Stack, StackProps, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import DomainIcon from '@mui/icons-material/Domain'
import GroupIcon from '@mui/icons-material/Group';
import React from "react";



const Title: React.FC<{ text: string, backgroundColor: string }> = ({ text, backgroundColor }) => {
    return <Stack style={{ backgroundColor, padding: "0px 8px", borderRadius: 4 }} >
        <Typography variant="subtitle2" style={{ fontWeight: "bold" }} >{text.toLowerCase()}</Typography>
    </Stack>
}

type TimetableCardRowProps = {
    icon: JSX.Element;
    text: string;
}

const TimetableCardRow: React.FC<TimetableCardRowProps> = ({ icon, text }) => {
    return (
        <Stack direction="row" spacing={1} >
            {icon}
            <div style={{ textAlign: "left" }} > {text}</div >
        </Stack >
    )
}

type Props = {
    type: string;
    name: string;
    tutor: string;
    groups: string[];
    room: string;
    day: string;
    slot: string;
    week?: number;
    foreground: string;
    background: string;
}

const LessonCard: React.FC<Props & StackProps> = ({ type, name, tutor, groups, foreground, background, room, day, slot, week }) => {

    const rowsData: TimetableCardRowProps[] = [
        { icon: <MenuBookIcon fontSize="small" />, text: name },
        { icon: <PersonIcon fontSize="small" />, text: tutor },
        { icon: <GroupIcon fontSize="small" />, text: groups.join(", ") },
        { icon: <DomainIcon fontSize="small" />, text: room }
    ];
    const rows = rowsData.map((row, index) => <TimetableCardRow key={index} {...row} />)

    return (
        <Stack
            component={Paper}
            sx={{ backgroundColor: background, border: "none", borderRadius: 2 }}
            width="100%"
            height="100%"
            padding={2}
            spacing={2}
            alignItems="start"
        >
            <Title text={type} backgroundColor={foreground} />
            <Stack spacing={1}>
                {rows}
                {/* {week}
                {day}
                {slot} */}
            </Stack>
        </Stack>
    )
}

export default LessonCard;