import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Fields, FormInputProps } from "@/types/types";

const FormInputText = ({ name, control, label, helperText }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                <TextField
                    helperText={error ? error.message : name === Fields.PHONE ? helperText : null}
                    error={!!error}
                    onChange={onChange}
                    value={value || ''}
                    fullWidth
                    label={label}
                    variant="outlined"
                    required
                    sx={{
                        marginTop: 12.5,
                        '& .MuiFormLabel-root': { textTransform: 'capitalize' },
                        '& .Mui-error': { ":first-letter": { textTransform: 'uppercase' } }
                    }}
                />
            )}
        />
    );
};

export default FormInputText;
