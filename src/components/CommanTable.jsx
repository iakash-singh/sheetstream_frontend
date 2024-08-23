import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    empId,
    name,
    designation,
    email,
    phone,
    gender
  ) {
    return { empId, name, designation, email, phone, gender };
  }
  
  const rows = [
    createData('EMP001', 'John Doe', 'Software Engineer', 'john.doe@example.com', 9876543210, 'Male'),
    createData('EMP002', 'Jane Smith', 'Product Manager', 'jane.smith@example.com', 9123456780, 'Female'),
    createData('EMP003', 'Alice Johnson', 'UX Designer', 'alice.johnson@example.com', 9876123456, 'Female'),
    createData('EMP004', 'Bob Brown', 'Data Scientist', 'bob.brown@example.com', 9988776655, 'Male'),
    createData('EMP005', 'Charlie Davis', 'DevOps Engineer', 'charlie.davis@example.com', 9123678543, 'Male'),
  ];

export default function CommanTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
