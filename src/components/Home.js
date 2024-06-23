import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const pages = [
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },
    { name: 'AgGrid', path: '/aggrid' },
    { name: 'D3Chart', path: '/d3chart' },
    { name: 'MUI', path: '/mui' },
  ];

  return (
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
  );
};

export default Home;