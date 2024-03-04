'use client'
import { Box, Container } from '@mui/material'
import React from 'react'
import { Form } from './Form'

const FormWrapper = () => {
    return (
        <Box mt={35} mb={12.5} textAlign={'center'} component={'section'}>
            <Container>
                <Form />
            </Container>
        </Box>
    )
}

export default FormWrapper