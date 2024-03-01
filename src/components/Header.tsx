import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import logo from '../app/assets/Logo.svg'

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = ({ }) => {
    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl">
                <Toolbar variant='dense' disableGutters>
                    <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

                        <Image src={logo} loading='lazy' width={104} height={26} alt={'logo'} />

                        <Stack direction={'row'} gap={'10px'}>
                            <Button variant="contained" color="primary">
                                Users
                            </Button>
                            <Button variant="contained" color="primary">
                                Sign up
                            </Button>
                        </Stack>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header