
'use client'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Form } from './Form'
import Test from './test'

const FormWrapper = () => {
    return (
        <Box mt={35} textAlign={'center'} component={'section'}>
            <Container>
                <Typography variant="h1" color="initial">Working with POST request</Typography>
                <Test />
                <Form />
            </Container>
        </Box>
    )
}

export default FormWrapper