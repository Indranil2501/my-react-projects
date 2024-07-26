import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react';

const Reactstrap = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{ padding: 5 }}>
            <Button variant="outlined" onClick={handleClickOpen} >
                Open Dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Title</DialogTitle>

                <DialogContent>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1, padding: 10 }}>
                            <TextField label="First Name" style={{ padding: 2 }} fullWidth />
                            <FormControl component="fieldset" style={{ padding: 2 }}>
                                <RadioGroup aria-label="user group" name="user-group">
                                    <FormControlLabel value="select-all" control={<Radio />} label="Select All" />
                                    <FormControlLabel value="vse" control={<Radio />} label="VSE" />
                                    <FormControlLabel value="ssg" control={<Radio />} label="SSG" />
                                    <FormControlLabel value="pdc" control={<Radio />} label="PDC" />
                                    <FormControlLabel value="ppc" control={<Radio />} label="PPC" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div style={{ flex: 1, padding: 10 }}>
                            <TextField label="Last Name" fullWidth style={{ padding: 2 }}/>
                            <TextField label="Start Date" fullWidth style={{ padding: 2 }}/>
                            <TextField label="End Date" fullWidth style={{ padding: 2 }}/>
                            <TextField label="Age" fullWidth style={{ padding: 2 }}/>
                            <TextField label="Location" fullWidth style={{ padding: 2 }}/>
                        </div>
                        <div style={{ flex: 2, padding: 10 }}>
                            <TextField label="Description" multiline rows={4} fullWidth style={{ padding: 2 }}/>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
};

export default Reactstrap;
