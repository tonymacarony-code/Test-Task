'use client'

import { Box, Container, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import CardItem from './CardItem'
import { IUser, useGetAllUsersQuery } from '@/app/(redux)/api';
import Loading from '@/app/loading';


const CardsWrapper = () => {

    const [currentPage, setCurrentPage] = useState(0)

    const { data: res, isLoading } = useGetAllUsersQuery(currentPage);
    const data = res ?? []

    if (isLoading) {
        return <Loading />;
    }

    const LoadMore = () => {
        setCurrentPage(currentPage + 1)
    }

    const isFullList = (data.total_pages || 1) !== (currentPage + 1);
    return (
        <Box mt={35} textAlign={'center'} component={'section'}>
            <Container>
                <Typography variant="h1" color="initial">Working with GET request</Typography>

                <Box mt={12.5} display={'grid'} gap={7} gridTemplateColumns={'repeat(3, minmax(0, 1fr))'}>
                    {data && data.users.map((user: IUser) => (
                        <CardItem key={user.id} user={user} />
                    ))}
                </Box>

                <Box mt={12.5} display={'flex'} justifyContent={'center'}>
                    <Button disabled={!isFullList} variant="contained" color="primary" onClick={LoadMore}>
                        Show more
                    </Button>
                </Box>

            </Container>
        </Box>
    )
}

export default CardsWrapper