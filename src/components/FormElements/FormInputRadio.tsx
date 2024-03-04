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
import { useGetPositionsQuery } from "@/app/(redux)/api";
import { FormInputProps, ISinglePosition } from "@/types/types";
import Loading from "@/app/loading";

export const FormInputRadio: React.FC<FormInputProps> = ({
    name,
    control,
    label,
}) => {
    const { data, isLoading } = useGetPositionsQuery('');

    if (isLoading) {
        return <Loading />;
    }

    const generateRadioOptions = () => {
        return data?.positions.map((singleOption: ISinglePosition) => (
            <FormControlLabel
                key={singleOption.id}
                value={singleOption.id}
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
                        <FormLabel error={!!error} focused={false} sx={{ textAlign: 'left', textTransform: 'capitalize' }} component="legend">{label}</FormLabel>
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
