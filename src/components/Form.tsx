'use client'

import React from "react";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./FormElements/FormInputText";
import { FormInputRadio } from "./FormElements/FormInputRadio";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormUploadPhoto from "./FormElements/FormUploadPhoto";


// Define validation schema using yup
export const validationSchema = yup.object().shape({
    Name: yup.string().required().min(2).max(60).required(),
    Email: yup.string().email('Please enter a valid email address').required('Email is required'),
    Phone: yup.string().matches(/^(\+380)((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number must be valid and started with +380').required().min(13).max(13).required(),
    Position: yup.string().required(),
    // Photo: yup.mixed(),
});

interface IFormInput {
    Name: string;
    Email: string;
    Phone: string;
    Position: string;
    // Photo: any;
}

export const Form = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    const onSubmit = (data: IFormInput) => {
        console.log('clicked');

        console.log(data);
    };

    return (
        <>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" alignSelf="center">
                <FormInputText name="Name" control={control} label="Name" />
                <FormInputText name="Email" control={control} label="Email" />
                <FormInputText name="Phone" control={control} label="Phone" helperText="+38 (XXX) XXX - XX - XX" />
                <Box maxWidth="380px" width="100%" display="flex" justifyContent="flex-start">
                    <FormInputRadio name="position" control={control} label="Position" />
                </Box>
                <FormUploadPhoto name='Photo' control={control} label={'Photo'} />
                <Button onClick={handleSubmit(onSubmit)} variant="contained">
                    Submit
                </Button>
            </Box>
        </>
    );
};
