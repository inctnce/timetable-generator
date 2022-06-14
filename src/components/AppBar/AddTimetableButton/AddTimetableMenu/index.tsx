import { Menu, MenuItem } from "@mui/material"
import React from "react"
import FileUploadPopover from "./FileUploadPopover";

type Props = {
    open: boolean;
    anchorEl: Element | ((element: Element) => Element) | null | undefined;
    onClose?: () => any;
}

const AddTimetableMenu: React.FC<Props> = ({ anchorEl, open, onClose }) => {

    const [uploadAnchorEl, setUploadAnchorEl] = React.useState<null | HTMLElement>(null);
    const uploadOpen = Boolean(uploadAnchorEl);

    const handleUploadClick = (event: React.MouseEvent<HTMLLIElement>) => {
        setUploadAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        if (onClose) onClose()
        setUploadAnchorEl(null);
    }

    return (
        <>
            <Menu
                id="basic-menu"
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
                <MenuItem disabled onClick={handleClose}>Заполнить вручную</MenuItem>
                <MenuItem onClick={handleUploadClick}>Загрузить файл</MenuItem>
            </Menu>

            <FileUploadPopover open={uploadOpen} anchorEl={uploadAnchorEl} onClose={handleClose} />
        </>
    )
}

export default AddTimetableMenu