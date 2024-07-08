import { Box, Typography } from '@mui/material';
import React from 'react';
import VirtualizedAutocomplete from './VirtualizedAutocomplete';

const MuiAutocompleteReactWindowPage = () => {
    const generateOptions = (count) => {
        return Array.from(new Array(count)).map((_, index) => `Option ${index + 1}`);
    };

    const options = generateOptions(150000);
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">MUI autocomplete & react-window integration</Typography>
            <Typography variant="body1">We have implemented MUI autocomplete with react-window to handle large date set.</Typography>
            <Box
                height={200}
                width={1200}s
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                <Typography variant="h4" gutterBottom>
                    Autocomplete with large data - Demo
                </Typography>
                <Box sx={{ width: 300 }}>
                    <VirtualizedAutocomplete options={options} />
                </Box>
            </Box>
        </Box>
    );
};

export default MuiAutocompleteReactWindowPage;