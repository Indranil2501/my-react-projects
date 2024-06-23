import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', py: 2, mt: 'auto', backgroundColor: '#1976d2', color: 'white' }}>
      <Typography variant="body1">© 2024 MyApp</Typography>
    </Box>
  );
};

export default Footer;