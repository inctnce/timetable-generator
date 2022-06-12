import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, Box, Button, Chip, MenuItem, Paper, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material"
import React from "react"
import DisciplineType from "../../models/DisciplineType"
import Room from "../../models/Room"
import { useAppDispatch } from "../../store/hooks"
import { manualFormSlice } from "../../store/reducers/manualForm"

const minWidth = 200

type RoomCardProps = Room & {
    button: "add" | "delete"
}

const RoomCard: React.FC<RoomCardProps> = (props) => {
    const [name, setName] = React.useState(props.name);
    const [type, setType] = React.useState(props.type || "Лекция");
    const [equipment, setEquipment] = React.useState(props.equipment);

    const dispatch = useAppDispatch();

    const fieldsData = [
        { label: "Номер", component: <NameField name={name} onChange={(e) => setName(e.target.value)} /> },
        { label: "Тип", component: <TypeField type={type} onChange={(e) => setType(e.target.value as DisciplineType)} /> },
        { label: "Оборудование", component: <EquipmentField equipment={equipment} onChange={(e, newValue) => setEquipment(newValue)} /> }
    ]

    const fields = fieldsData.map(({ label, component }) => (
        <Stack key={label} spacing={2} flex={1}>
            <Typography variant="h4">{label}</Typography>
            {component}
        </Stack>
    ))

    const clear = () => {
        setName("");
        setEquipment([]);
    }

    const handleAddButton = () => {
        if (name !== "" && type !== "lecture") dispatch(manualFormSlice.actions.addRoom({ name, type, equipment }));
        clear();
    }

    const handleDeleteButton = () => {
        dispatch(manualFormSlice.actions.deleteRoom({ name, type, equipment }));
        clear();
    }

    const button = props.button === "add"
        ? <Button variant="contained" size="small" disableElevation onClick={handleAddButton} >Добавить</Button>
        : <Button variant="outlined" size="small" color="error" disableElevation onClick={handleDeleteButton} >Удалить</Button>

    return (
        <Stack component={Paper} sx={{ borderRadius: 2 }} width="100%" padding={2} spacing={2}>
            <Stack direction="row" spacing={2} flexWrap="wrap">
                {fields}
            </Stack>
            <Stack flexGrow={1} direction="row" justifyContent="end">
                {button}
            </Stack>
        </Stack>
    )
}

const NameField: React.FC<{ name: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any }> = ({ name, onChange }) => {
    return <TextField required sx={{ minWidth: minWidth }} value={name} onChange={onChange} />
}

const TypeField: React.FC<{ type: string, onChange: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined }> = (props) => {
    const items = ["Лекция", "Практика"];

    return (
        <Select sx={{ minWidth: minWidth }} value={props.type || items[0]} onChange={props.onChange} >
            {items.map((item) => <MenuItem key={item} value={item} >{item}</MenuItem>)}
        </Select>
    )
}

const EquipmentField: React.FC<{ equipment: string[], onChange: ((event: React.SyntheticEvent<Element, Event>, value: string[], reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<string> | undefined) => void) | undefined }> = ({ equipment, onChange }) => {
    return (
        <Autocomplete
            sx={{ minWidth: minWidth }}
            multiple
            options={[]}
            value={equipment}
            onChange={onChange}
            freeSolo
            PaperComponent={Box}
            renderTags={(value: string[], getTagProps) =>
                value.map((option: string, index: number) => (
                    <Chip
                        size="small"
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => <TextField {...params} />}
        />
    )
}

export default RoomCard;