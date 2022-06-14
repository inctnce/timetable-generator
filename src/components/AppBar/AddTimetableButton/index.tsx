import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react"
import AddTimetableMenu from "./AddTimetableMenu";

const AddTimetableButton: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);


    return (
        <>
            <IconButton size="small" onClick={handleClick} >
                <Add />
            </IconButton>

            <AddTimetableMenu open={open} anchorEl={anchorEl} onClose={handleClose} />
        </>
    )
}

export default AddTimetableButton;