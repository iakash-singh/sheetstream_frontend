import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CommanTable({ employees }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Employee Id</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Designation</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Email</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Phone</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees && employees.length > 0 ? (
            employees.map((row) => (
              <TableRow
                key={row.empId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.empId}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.designation}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Typography variant="h6">No employee data available</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
