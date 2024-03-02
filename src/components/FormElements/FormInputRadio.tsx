'use client'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { useGetPositionsQuery } from "@/app/(redux)/api";
import { ISinglePosition } from "@/types/types";



export const FormInputRadio: React.FC<FormInputProps> = ({
    name,
    control,
    label,
}) => {
    const { data } = useGetPositionsQuery('');

    const generateRadioOptions = () => {
        return data?.positions.map((singleOption: ISinglePosition) => (
            <FormControlLabel
                key={singleOption.id}
                value={singleOption.name}
                label={singleOption.name}
                control={<Radio />}
                sx={{ textAlign: "left" }}
            />
        ));
    };


    return (
        <FormControl required sx={{ mt: 6.25 }} component="fieldset">
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error }, }) => (
                    <>
                        <FormLabel error={!!error} focused={false} sx={{ textAlign: 'left' }} component="legend">{label}</FormLabel>
                        <RadioGroup value={value || ''} onChange={onChange}>
                            {generateRadioOptions()}
                            {error ? <Typography textAlign={'left'} variant='body1' color={'error'}>{error.message}</Typography> : null}
                        </RadioGroup>
                    </>
                )}
            />
        </FormControl>
    );
};

