'use client'

import React from "react";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./FormElements/FormInputText";
import { FormInputRadio } from "./FormElements/FormInputRadio";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormUploadPhoto from "./FormElements/FormUploadPhoto";
import validator from "validator";


function getExtension(filename: string = '') {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

// Define validation schema using yup
export const validationSchema = yup.object().shape({
    Name: yup.string().required().min(2).max(60),
    Email: yup.string()
        .email()
        .required()
        .test((value) => validator.isEmail(value)),
    Phone: yup.string()
        .required()
        .test((value) => validator.isMobilePhone(value, 'uk-UA')),
    Position: yup.string()
        .required()
        .notOneOf(["", undefined], "Position is required"),
    Photo: yup.mixed()
        .test({
            message: 'Please provide a supported file type',
            test: (file: any, context) => {
                const isValid = ['png', 'jpg', 'jpeg'].includes(getExtension(file?.name));
                console.log(isValid)
                if (!isValid) context?.createError();
                return isValid;
            }
        })

});

enum Fields {
    NAME = 'Name',
    EMAIL = 'Email',
    PHONE = 'Phone',
    POSITION = 'Position',
    PHOTO = 'Photo'
}


export const Form = () => {
    const { handleSubmit, control, formState } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    // !!!
    const onSubmit = (data: any) => {
        console.log('clicked');
        console.log(data);
    };

    return (
        <>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" alignSelf="center">
                <FormInputText name={Fields.NAME} control={control} label={Fields.NAME} />
                <FormInputText name={Fields.EMAIL} control={control} label={Fields.EMAIL} />
                <FormInputText name={Fields.PHONE} control={control} label={Fields.PHONE} helperText="+38 (XXX) XXX - XX - XX" />
                <Box maxWidth="380px" width="100%" display="flex" justifyContent="flex-start">
                    <FormInputRadio name={Fields.POSITION} control={control} label={Fields.POSITION} />
                </Box>
                <FormUploadPhoto name={Fields.PHOTO} control={control} label={Fields.PHOTO} />
                <Button
                    sx={{ marginTop: 12.5 }}
                    onClick={handleSubmit(onSubmit)}
                    variant="contained"
                    disabled={!formState.isValid}
                >
                    Sign up
                </Button>
            </Box>
        </>
    );
};
