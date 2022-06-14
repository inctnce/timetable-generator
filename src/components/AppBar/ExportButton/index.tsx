import { IosShare } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import Papa from "papaparse";

const ExportButton: React.FC = () => {

    const { lessons } = useAppSelector(({ timetable }) => timetable);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleJSONClick = () => saveFile("timetable.json", JSON.stringify(lessons))

    const handleCSVClick = () => {
        const stringifiedLessons = lessons.map((lesson) => ({ ...lesson, tutor: lesson.tutor.name, room: lesson.room.name }));
        saveFile("timetable.csv", Papa.unparse(stringifiedLessons));
    }

    const saveFile = (filename: string, data: string) => {
        const blob = new File([data], filename);
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }

    return (
        <>
            <IconButton
                size="small"
                onClick={handleClick}
            >
                <IosShare fontSize="small" />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    variant: "elevation",
                    elevation: 3,
                    sx: {
                        border: "none",
                        borderRadius: 2,
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleJSONClick} >Экспорт в формате {" "} .json</MenuItem>
                <MenuItem onClick={handleCSVClick} >Экспорт в формате {" "} .csv</MenuItem>
            </Menu>
        </>
    )
}

export default ExportButton