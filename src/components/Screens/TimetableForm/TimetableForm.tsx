import { Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { ReactComponent as LoadFile } from "../../../assets/load-file.svg"
import React from "react";
import { isInstanceOfData } from "../../../models/Data";


const TimetableForm: React.FC = () => {
    const [drag, setDrag] = React.useState(false);
    const navigate = useNavigate();

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const handleDragStop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    const handleOnDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files)
        const data = JSON.parse(await files[0].text())
        console.log(isInstanceOfData(data));
    }

    return (
        <Stack
            padding={2}
            spacing={2}
            mb={2}
            width="90%"
            alignItems="center"
            justifyContent="center"
            onDragStart={handleDragStart}
            onDragOver={handleDragStart}
            onDragLeave={handleDragStop}
            onDrop={handleOnDrop}
            sx={{
                borderStyle: "dashed",
                borderRadius: 4
            }}
        >
            <LoadFile />
            <Typography variant="h1" >Перетащите файл сюда</Typography>
            <Typography variant="subtitle1" textAlign="center">
                В формате JSON<br /> или <Link sx={{ cursor: "pointer" }} onClick={() => navigate("manual")} underline="hover" ><strong>введите вручную</strong></Link>
            </Typography>
        </Stack>
    )
}

export default TimetableForm
