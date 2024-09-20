import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  const location = useLocation();

  const getSubHeading = (path) => {
    switch (path) {
      case '/aggrid':
        return 'Ag-Grid';
      case '/d3chart':
        return 'D3Chart';
      case '/lineChart':
        return 'D3Chart | Line chart';
      case '/barChart':
        return 'D3Chart | Bar chart';
      case '/areaChart':
        return 'D3Chart | Area chart';
      case '/stackedBarChart':
        return 'D3Chart | Stacked Bar chart';
      case '/mui':
        return 'MUI';
      case '/mui-autocomplete':
        return 'MUI | Autocomplete';
      case '/mui-autocomplete-react-window':
        return 'MUI | Autocomplete with huge data';
      case '/contact':
        return 'Contact Us';
      case '/about':
        return 'About Us';
      case '/login':
        return 'Login';
      case '/apps':
        return 'Apps';
      case '/calculator':
        return 'Apps | Calculator';
      case '/note':
        return 'Apps | Note';
      case '/quiz':
        return 'Apps | Quiz';
      default:
        return '';
    }
  };

  const getPath = (path) => {
    switch (path) {
      case '/aggrid':
        return '/aggrid';
      case '/d3chart':
      case '/lineChart':
      case '/barChart':
      case '/areaChart':
      case '/stackedBarChart':
        return '/d3chart';
      case '/mui':
      case '/mui-autocomplete':
      case '/mui-autocomplete-react-window':
        return '/mui';
      case '/contact':
        return '/contact';
      case '/about':
        return '/about';
      case '/login':
        return '/login';
      case '/apps':
      case '/quiz':
      case '/calculator':
      case '/note':
        return '/apps';
      default:
        return '';
    }
  };

  const subHeading = getSubHeading(location.pathname);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          {subHeading && (
            <>
              <Typography variant="h6" component="span" sx={{ marginLeft: 2, marginRight: 2 }}>
                |
              </Typography>
              <Typography variant="subtitle1" component="span">
                <Link to={getPath(location.pathname)} style={{ textDecoration: 'none', color: 'white' }}>{subHeading}</Link>
              </Typography>
            </>
          )}
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