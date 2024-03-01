import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
const options = [
    {
        label: "Frontend developer",
        value: "frontend_developer",
    },
    {
        label: "Backend developer",
        value: "backend_developer",
    },
    {
        label: "Designer",
        value: "designer",
    },
    {
        label: "QA",
        value: "qa",
    },
];
export const FormInputRadio: React.FC<FormInputProps> = ({
    name,
    control,
    label,
}) => {
    const generateRadioOptions = () => {
        return options.map((singleOption, idx) => (
            <FormControlLabel
                key={idx + singleOption.value}
                value={singleOption.value}
                label={singleOption.label}
                control={<Radio />}
                sx={{ textAlign: "left" }}
            />
        ));
    };
    return (
        <FormControl required sx={{ mt: 6.25 }} component="fieldset">
            <FormLabel focused={false} sx={{ textAlign: 'left' }} component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <RadioGroup value={value || ''} onChange={onChange}>
                        {generateRadioOptions()}
                    </RadioGroup>
                )}
            />
        </FormControl>
    );
};

