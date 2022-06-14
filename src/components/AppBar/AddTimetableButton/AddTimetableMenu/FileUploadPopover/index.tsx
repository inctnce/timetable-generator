import { Button, Popover, Stack } from "@mui/material";
import React from "react";
import Scheduler from "../../../../../lib/Scheduler/Scheduler";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { timetableSlice } from "../../../../../store/reducers/timetable";
import FileUpload from "./FileUpload";

type Props = {
    open: boolean
    anchorEl: Element | ((element: Element) => Element) | null | undefined;
    onClose: () => any;
}

const FileUploadPopover: React.FC<Props> = ({ anchorEl, open, onClose }) => {

    const dispatch = useAppDispatch();
    const timetable = useAppSelector((state) => state.timetable);

    const handleButtonClick = () => {
        if (timetable.data) {
            const lessons = new Scheduler(timetable.data).schedule();
            dispatch(timetableSlice.actions.setLessons(lessons));
            if (onClose) onClose();
        }
    }

    const isButtonDisabled = () => timetable.data ? false : true;


    return (
        <Popover
            anchorEl={anchorEl}
            open={open}
            // disablePortal={true}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                variant: "elevation",
                elevation: 3,
                sx: {
                    border: "none",
                    borderRadius: 2
                }
            }}
        >
            <Stack p={2} spacing={2} justifyContent="flex-end" alignItems="end" >
                <FileUpload />
                <Button
                    disabled={isButtonDisabled()}
                    sx={{ width: "fit-content" }}
                    onClick={handleButtonClick}
                >
                    Спроектировать
                </Button>
            </Stack>
        </Popover>
    )
}

export default FileUploadPopover
