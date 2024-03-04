import React, { useRef, FC, ChangeEvent } from 'react';
import { Controller, ControllerRenderProps, FieldValues } from 'react-hook-form';
import { Box, Button, InputLabel, Typography } from '@mui/material';
import { FormInputProps } from '@/types/types';

const FormUploadPhoto: FC<FormInputProps> = ({ name, control, label }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<FieldValues, string>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            field.onChange(file);
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={''}
            render={({ field, fieldState: { error } }) => (
                <>
                    <Box maxWidth="380px" mt={12.5} display="flex" width="100%">
                        <Box>
                            <InputLabel htmlFor="upload">
                                <Button
                                    sx={{ borderColor: error ? '#d32f2f' : 'black', color: 'black', borderRadius: '4px 0 0 4px', px: 4, py: '14px', ':hover': { backgroundColor: 'lightgray' } }}
                                    variant="outlined"
                                    onClick={handleUploadClick}
                                    color='inherit'
                                >
                                    Upload File
                                </Button>
                            </InputLabel>
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="upload"
                                ref={fileInputRef}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e, field)}
                            />
                        </Box>
                        <Box
                            px={4}
                            py="14px"
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="center"
                            width="100%"
                            border="1px solid"
                            borderColor={error ? '#d32f2f' : '#D0CFCF'}
                            sx={{ borderRadius: '0 4px 4px 0', color: '#7E7E7E', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {field.value ? field.value.name : 'Upload your photo'}
                        </Box>
                    </Box>
                    {error && <Typography textAlign="left" variant="body1" color="error">{error.message}</Typography>}
                </>
            )}
        />
    );
};

export default FormUploadPhoto;
