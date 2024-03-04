'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import CardItem from './CardItem';
import { useGetAllUsersQuery } from '@/app/(redux)/api';
import Loading from '@/app/loading';
import { IUser } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/app/(redux)/hooks';
import { selectCurrentPage, setCurrentPage } from '@/app/(redux)/currentPageSlice';

const CardsWrapper = () => {
    const currentPage = useAppSelector(selectCurrentPage);
    const dispatch = useAppDispatch();

    // Fetching data
    const { data: res, isLoading } = useGetAllUsersQuery(currentPage);
    const users = res?.users || [];

    // Handler for loading more data
    const loadMore = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    // Check if all data has been loaded
    const isFullList = (res?.total_pages || 1) !== (currentPage + 1);


    if (isLoading) {
        return <Loading />
    }

    return (
        <Box mt={35} textAlign="center" component="section">
            <Container>
                <Typography variant="h1" color="initial">Working with GET request</Typography>

                {/* Displaying user cards */}
                <Box mt={12.5} display="grid" gap={7} gridTemplateColumns={{ xs: 'repeat(1, minmax(0, 1fr))', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }}>
                    {users.map((user: IUser) => <CardItem key={user.id} user={user} />)}
                </Box>

                {/* Button to load more data */}
                <Box mt={12.5} display="flex" justifyContent="center">
                    <Button disabled={!isFullList} variant="contained" color="primary" onClick={loadMore}>
                        Show more
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CardsWrapper;
