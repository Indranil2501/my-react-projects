import React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const PopoverComponent = ({ onClose }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };

  return (
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
  );
};

export default PopoverComponent;