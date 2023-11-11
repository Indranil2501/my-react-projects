import React, { useState } from 'react';
import { Popover, Button } from '@mui/material';
import Draggable from 'react-draggable';

const DraggablePopover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dragPosition, setDragPosition] = React.useState({ x:0, y:0 });

  const handleClose = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
  };

  const togglePopover = (event) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(!popoverOpen);
  };

  const handleDrag = (e, data) => {
    setDragPosition({ x: data.x, y: data.y })
  }
  return (
    <>
      <Draggable
        position={dragPosition}
        onDrag={handleDrag}
      >
        <Popover
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          classes={{ paper: 'custom-popover' }}
        >
          <div className="popover-content">
            <div className="popover-header">
              <h3 className="header-text">Popover Header</h3>
            </div>
            <div className="popover-body m-1 p-1">Popover Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.</div>
            <Button onClick={handleClose} className="popover-button">Close Popover</Button>
          </div>
        </Popover>
      </Draggable>

      <div className="card m-1 p-1">
        <Button onClick={togglePopover}>
          Open Popover
        </Button>
      </div>
      <div className="card m-1 p-1">
      </div>
    </>
  );
};

export default DraggablePopover;