
'use client'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Form } from './Form'

const FormWrapper = () => {
    return (
        <Box mt={35} mb={12.5} textAlign={'center'} component={'section'}>
            <Container>
                <Typography variant="h1" color="initial">Working with POST request</Typography>
                <Form />
            </Container>
        </Box>
    )
}

export default FormWrapper