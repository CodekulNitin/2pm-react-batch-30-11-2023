import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';


export default function StickyHeadTable() {
  

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
        
            </TableRow>
          </TableHead>
          <TableBody>
          
                  <TableRow hover tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      
                      return (
                        <TableCell key={column.id} align={column.align}>
                      
                        </TableCell>
                      );
                    })}
                  </TableRow>
             
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>
  );
}