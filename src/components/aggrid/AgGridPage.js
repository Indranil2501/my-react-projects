import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { Paper, Typography } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const AgGridPage = () => {
  const [rowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ]);

  const [colDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ]);

  return (
    <Paper elevation={3} square={false} sx={{ margin: 2, padding: 1 }}>
      <Typography sx={{ margin: 2 }} variant="h4">AgGrid Page</Typography>
      <Typography sx={{ margin: 2 }} variant="body1">This is the AgGrid page content.</Typography>
      <Paper elevation={3} square={false} sx={{ margin: 2, padding: 1 }}>
        <div
          className={
            "ag-theme-quartz-dark"
          }
          style={{ width: '100%', height: '300px' }}
        >
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </Paper>
    </Paper>
  );
};

export default AgGridPage;