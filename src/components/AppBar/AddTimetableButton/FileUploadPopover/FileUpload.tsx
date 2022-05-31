import { Stack, Typography } from "@mui/material";
import { ReactComponent as LoadFile } from "../../../assets/load-file.svg"
import React from "react";
import Data, { isInstanceOfData } from "../../../../models/Data";
import { useAppDispatch } from "../../../../store/hooks";
import { timetableSlice } from "../../../../store/reducers/timetable";


const FileUpload: React.FC = () => {

    const inputFile: any = React.useRef(null);
    const dispatch = useAppDispatch();



    const handleOnDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files)
        const data = JSON.parse(await files[0].text())
        console.log(isInstanceOfData(data));
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files?.length) {
            const data: Data = JSON.parse(await files[0].text());

            if (!isInstanceOfData(data))
                return alert("Неверный формат данных");

            dispatch(timetableSlice.actions.setData(data))
        }
    };

    const handleButtonClick = () => {
        if (inputFile.current)
            inputFile.current.click();
    }

    return (
        <Stack
            padding={2}
            spacing={2}
            width="100%"
            minWidth={300}
            alignItems="center"
            justifyContent="center"
            onDrop={handleOnDrop}
            sx={{
                borderStyle: "dashed",
                borderRadius: 1
            }}
        >
            <input
                style={{ display: "none" }}
                accept=".json"
                ref={inputFile}
                onChange={handleFileUpload}
                type="file"
            />
            <LoadFile width="50" height="auto" />
            <Typography textAlign="center" variant="h6" >
                Перетащите файл <br />
                или <br />
                <strong style={{ cursor: "pointer" }} onClick={handleButtonClick} >загрузите с устройства</strong>
            </Typography>
        </Stack >
    )
}

export default FileUpload