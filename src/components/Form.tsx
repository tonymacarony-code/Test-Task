// Importing libraries and components
import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetAllUsersQuery, api } from "@/app/(redux)/api";
import { useAppDispatch, useAppSelector } from "@/app/(redux)/hooks";
import Image from "next/image";
import Loading from "@/app/loading";
import successImage from '../app/assets/success-image.png'
import FormUploadPhoto from "./FormElements/FormUploadPhoto";
import { validationSchema } from "./FormElements/validation";
import { Fields } from "@/types/types";
import { selectCurrentPage } from "@/app/(redux)/currentPageSlice";
import { useGetTokenQuery, usePostUserMutation } from "@/app/(redux)/postApi";
import FormInputRadio from "./FormElements/FormInputRadio";
import FormInputText from "./FormElements/FormInputText";

// Main Form component
export const Form = () => {
    // Form setup
    const { handleSubmit, control, formState } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    // Hooks for API operations and state management
    const [postUser, { isLoading, isSuccess }] = usePostUserMutation();
    const { refetch: refetchToken } = useGetTokenQuery('');
    const currentPage = useAppSelector(selectCurrentPage);
    const { refetch } = useGetAllUsersQuery(currentPage);
    const dispatch = useAppDispatch();

    // Effect hook for token refetching
    useEffect(() => {
        refetchToken();
    }, [refetchToken]);

    // Form submission handler
    const onSubmit: SubmitHandler<{ name: string; email: string; phone: string; position_id: number; photo: any }> = async (payload) => {
        try {
            const { data: newTokenData } = await refetchToken();
            const formData = new FormData();
            if (payload.photo) {
                formData.append('photo', payload.photo);
            }
            formData.append('name', payload.name);
            formData.append('email', payload.email);
            formData.append('position_id', String(payload.position_id));
            formData.append('phone', payload.phone);
            await postUser({ token: newTokenData.token, payload: formData });
            refetch();
            dispatch(api.util.resetApiState());
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Rendering based on loading state
    if (isLoading) {
        return <Loading />;
    }


    return (
        <>
            <Typography variant="h1" color="initial">{isSuccess ? 'User successfully registered' : 'Working with POST request'}</Typography>
            {isSuccess ? (
                <Box mt={12.5} display="flex" justifyContent="center" alignItems="center">
                    <Image width={330} height={290} loading="lazy" src={successImage} alt='successImage' />
                </Box>
            ) : (
                <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" alignSelf="center">
                    <FormInputText name={Fields.NAME} control={control} label={Fields.NAME} />
                    <FormInputText name={Fields.EMAIL} control={control} label={Fields.EMAIL} />
                    <FormInputText name={Fields.PHONE} control={control} label={Fields.PHONE} helperText="+38 (XXX) XXX - XX - XX" />
                    <Box maxWidth="380px" width="100%" display="flex" justifyContent="flex-start">
                        <FormInputRadio name={Fields.POSITION_ID} control={control} label={Fields.POSITION} />
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
            )}
        </>
    );
};
