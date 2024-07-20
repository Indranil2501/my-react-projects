import { faBackspace, faDivide, faEquals, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === '←') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <TextField
          fullWidth
          value={display}
          variant="outlined"
          inputProps={{ readOnly: true }}
        />
        <Grid container spacing={1} mt={2}>
          {['7', '8', '9', '/'].map((item) => (
            <Grid item xs={3} key={item}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(item)}
              >
                {item === '/' ? <FontAwesomeIcon icon={faDivide} /> : item}
              </Button>
            </Grid>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <Grid item xs={3} key={item}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(item)}
              >
                {item === '*' ? <FontAwesomeIcon icon={faTimes} /> : item}
              </Button>
            </Grid>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <Grid item xs={3} key={item}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(item)}
              >
                {item === '-' ? <FontAwesomeIcon icon={faMinus} /> : item}
              </Button>
            </Grid>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <Grid item xs={3} key={item}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(item)}
              >
                {item === '=' ? <FontAwesomeIcon icon={faEquals} /> : item === '+' ? <FontAwesomeIcon icon={faPlus} /> : item}
              </Button>
            </Grid>
          ))}
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              onClick={() => handleButtonClick('C')}
            >
              C
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: '37px' }}
              onClick={() => handleButtonClick('←')}
            >
              <FontAwesomeIcon icon={faBackspace} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Calculator;
