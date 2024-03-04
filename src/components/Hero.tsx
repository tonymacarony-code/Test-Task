import { Box, Container, Typography, Button } from '@mui/material'
import React, { FC } from 'react'
import heroBg from '../app/assets/hero.jpeg'
import Image from 'next/image'

interface IHeroProps { }

const Hero: FC<IHeroProps> = () => {
    return (
        <Container disableGutters>
            <Box
                px={4}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ minHeight: { xs: '500px', md: '650px' }, position: 'relative', objectFit: 'cover' }}
            >

                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    bgcolor="rgba(0, 0, 0, 0.5)"
                    zIndex={1}
                />

                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={heroBg} alt='hero' fill style={{ objectFit: 'cover' }} />

                <Box maxWidth={'380px'} textAlign={'center'} sx={{ zIndex: 1 }}>
                    <Typography component={'h1'} variant="h1" color="white">Test assignment for front-end developer</Typography>
                    <Typography mt={5} component={'p'} variant="body1" color="white">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</Typography>
                    <Box mt={8}>
                        <Button variant="contained" color="primary">
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Hero
