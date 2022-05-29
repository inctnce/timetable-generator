import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { manualFormSlice } from "../../store/reducers/manualForm";

const TutorCard: React.FC<{ name: string, button: "add" | "clear" }> = ({ name, button }) => {
    const [value, setValue] = React.useState(name)
    const dispatch = useAppDispatch()

    const clear = () => {
        setValue("")
    }

    const handleAddTutor = () => {
        dispatch(manualFormSlice.actions.addTutor(value));
        clear()
    }

    const handleDeleteTutor = () => {
        dispatch(manualFormSlice.actions.deleteTutor(value));
        clear()
    }

    const handleButtonDisable = () => value.trim() === "";

    const formButton = button === "add"
        ? <Button size="small" variant="contained" disableElevation onClick={handleAddTutor} disabled={handleButtonDisable()} >Добавить     </Button>
        : <Button size="small" onClick={handleDeleteTutor} disabled={handleButtonDisable()} >Удалить</Button>

    return (
        <Stack component={Paper} spacing={2} padding={2} sx={{ borderRadius: 2 }} >
            <Typography variant="h6">Имя</Typography>
            <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {formButton}
        </Stack >
    )
}

export default TutorCard;