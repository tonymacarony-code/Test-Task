import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress size={48} color='secondary' />
        </div>
    );
};

export default Loading;
