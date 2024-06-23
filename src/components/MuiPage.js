import React, { useState } from 'react';
import { Typography, Box, Autocomplete, TextField, Chip, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const MuiPage = () => {
    const pages = [
        { name: 'Autocomplete', path: '/mui-autocomplete' }
      ];
    
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">MuiPage Page</Typography>
            <Typography variant="body1">This is the MuiPage page content.</Typography>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={3}>
                    {pages.map((page) => (
                        <Grid item xs={12} sm={6} md={4} key={page.name}>
                            <Link to={page.path} style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="h6">{page.name}</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default MuiPage;