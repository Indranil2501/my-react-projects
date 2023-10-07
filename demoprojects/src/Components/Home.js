import React, { useState } from 'react';
import Popover from './Popover';

const Home = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div className="card">
      <div className="card-content" onClick={togglePopover}>
        Click to Open Popover
      </div>
      {popoverOpen && <Popover onClose={togglePopover} />}
    </div>
  );
};

export default Home;