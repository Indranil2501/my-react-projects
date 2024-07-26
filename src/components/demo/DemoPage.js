import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const DemoPage = () => {
    const pages = [
        { name: 'Custom Reactstrap Modal', path: '/reactstrap' }
      ];
    
    return (
        <Box sx={{ p: 3 }}>
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

export default DemoPage;