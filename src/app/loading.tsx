import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Loading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 25 }}>
            <CircularProgress size={48} color='secondary' />
        </Box>
    );
};

export default Loading;
