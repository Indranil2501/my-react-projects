import { Card, CardActions, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Popover from '@mui/material/Popover';

const Home = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <div className="popover-content">
          <div className="popover-header">Popover Header</div>
          <div className="popover-body">Popover Body Content</div>
          <Button onClick={handleClose}>Close Popover</Button>
        </div>
      </Popover>
      <div className="card m-1 p-1">
        <Button onClick={togglePopover}>
          Open Popover
        </Button>
        {popoverOpen && <PopoverComponent onClose={togglePopover} />}
      </div>
      <div className="card m-1 p-1">
      </div>
    </>
  );
};

export default Home;