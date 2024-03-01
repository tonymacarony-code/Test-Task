import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, label, helperText }: FormInputProps) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    helperText={error ? error.message : name === 'Phone' ? helperText : null}
                    error={!!error}
                    onChange={onChange}
                    value={value || ''}
                    fullWidth
                    label={label}
                    variant="outlined"
                    sx={{ mt: 12.5 }}
                    required
                />
            )}
        />
    );
};