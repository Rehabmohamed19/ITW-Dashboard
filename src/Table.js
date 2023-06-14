
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Username', width: 130 },
  { field: 'lastName', headerName: 'Email Address', width: 130 },
  { field: 'group', headerName: 'Group', width: 130 },
];

export default function BasicTable({ rows ,handleEditRow}) {

  
  // console.log(rows);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onRowClick={handleEditRow}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}