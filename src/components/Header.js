import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </Typography>
        <Box>
          <Button color="inherit"><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></Button>
          <Button color="inherit"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></Button>
          <Button color="inherit"><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;