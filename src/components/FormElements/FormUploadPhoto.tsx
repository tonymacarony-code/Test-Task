import React, { useState, useRef, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Box, Button, InputLabel, TextField } from '@mui/material';
import { FormInputProps } from './FormInputProps';

// Define a type for the form data

const FormUploadPhoto: FC<FormInputProps> = ({ name, control, label }) => {

    const [fileName, setFileName] = useState<string>('Upload your photo');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Validation rule for image files
    const imageValidation = {
        required: 'An image file is required',
        validate: (fileList: FileList) => {
            if (fileList.length === 0) {
                return 'An image file is required';
            }
            const file = fileList[0];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
            if (!allowedTypes.includes(file.type)) {
                return 'Invalid file type. Please select an image (jpeg, png, gif, svg).';
            }
            return true;
        }
    };

    // Function to handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('Upload your photo');
        }
    };

    // Function to handle click on upload button
    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (

        <Controller
            name={name}
            control={control}
            rules={imageValidation}
            defaultValue={undefined}
            render={({ field, fieldState: { error }, }) => (
                <Box maxWidth="380px" mt={12.5} display="flex" width="100%">
                    <Box>
                        <InputLabel htmlFor="upload">
                            <Button
                                color="inherit"
                                sx={{ color: 'black', borderRadius: '4px 0 0 4px', px: 4, py: '14px' }}
                                variant="outlined"
                                onClick={handleUploadClick} // Handle upload button click
                            >
                                Upload File
                            </Button>
                        </InputLabel>
                        <TextField
                            {...field}
                            InputLabelProps={{ shrink: true }}
                            type="file"
                            sx={{ display: "none" }}
                            id="upload"
                            error={!!error}
                            onChange={handleFileChange}
                            inputRef={fileInputRef} // Attach ref to input element
                        />
                    </Box>
                    <Box
                        px={4}
                        py="14px"
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        width="100%"
                        border="1px solid black"
                        sx={{ borderColor: '#D0CFCF', borderRadius: '0 4px 4px 0' }}
                    >
                        {fileName}
                    </Box>
                </Box>
            )}
        />


    );
};

export default FormUploadPhoto;
