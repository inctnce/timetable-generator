import { Paper, Stack, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
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
    teacher: string;
    groups: string[];
    foreground: string;
    background: string;
}

const TimetableCard: React.FC<Props> = ({ type, name, teacher, groups, foreground, background }) => {

    const rowsData: TimetableCardRowProps[] = [{ icon: <MenuBookIcon fontSize="small" />, text: name }, { icon: <PersonIcon fontSize="small" />, text: teacher }, { icon: <GroupIcon fontSize="small" />, text: groups.join(", ") }];
    const rows = rowsData.map((row) => <TimetableCardRow {...row} />)

    return (
        <Paper sx={{ backgroundColor: background, border: "none", borderRadius: 2 }} >
            <Stack width="fit-content" padding={2} spacing={2} alignItems="start">
                <Title text={type} backgroundColor={foreground} />
                <Stack spacing={1}>
                    {rows}
                </Stack>
            </Stack>
        </Paper>
    )
}

export default TimetableCard;