import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// Theme
import { ModuleRegistry } from '@ag-grid-community/core';
import React, { useEffect, useMemo, useState } from 'react';
import { Typography, Paper } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
// React Grid Logic
import '@ag-grid-community/styles/ag-grid.css';
// Core CSS
import '@ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const AgGridPage = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
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