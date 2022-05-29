import { Collapse, Stack } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../../store/hooks";
import RoomCard from "../../../Cards/RoomCard";
import { TransitionGroup } from "react-transition-group"

const RoomForm: React.FC = () => {

    const manualForm = useAppSelector((state) => state.manualForm);

    const rooms = [
        ...Array.from(manualForm.rooms).map(({ name, type, equipment }) => (
            <Collapse key={name} sx={{ width: "100%" }}><RoomCard button="delete" name={name} type={type} equipment={equipment} /></Collapse>
        )),
        <RoomCard key="" button="add" name="" type="lecture" equipment={[]} />
    ]

    return (
        <Stack component={TransitionGroup} alignItems="center" gap={2} >
            {rooms}
        </Stack>
    )
}

export default RoomForm;