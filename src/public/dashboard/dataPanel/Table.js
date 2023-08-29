import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

function createData(name, license, category, center, type, date, status) {
  return {name, license, category, center, type, date, status};
}

const rows = [
  createData('CNTR-REQ-11343', 230101012095, "Day care center", 1232656500, "Request to suspend the work of family center", '8/2/1445'),
  createData('CNTR-REQ-11321', 230101012095, "Day care center", 1232656500, "Request confirmation of payment and fines", '8/2/1445'),
  createData('CNTR-REQ-11319', null, "Ahly Children's Hospotality Center", "To be determined with the license issuance service ", "Ahli data recovery center", "7/2/1445"),
  createData('CNTR-REQ-11318', 230400032233, "Family Counseling Center", 1798741210, "Correction of Ahli Center Information", '7/2/1445'),
  createData('CNTR-REQ-11317', 2301011012202, "Day care center", 1232656500, "Correction of Family Center Information", "7/2/1445"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: '12px'}}>Order number</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}>License number</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}>Order category</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}>Center name</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}>Type of request</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}>Date of application</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}>Order status</TableCell>
            <TableCell align="right" sx={{fontSize: '12px'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row" sx={{fontSize: '8px'}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{fontSize: '10px'}}>{row.license}</TableCell>
              <TableCell align="right" sx={{fontSize: '10px'}}>{row.category}</TableCell>
              <TableCell align="right" sx={{fontSize: '10px'}}>{row.center}</TableCell>
              <TableCell align="right" sx={{fontSize: '10px'}}>{row.type}</TableCell>
              <TableCell align="right" sx={{fontSize: '10px'}}>{row.date}</TableCell>
              <TableCell align="right" sx={{fontSize: '10px'}}>
                <Button variant="contained" size="small"
                        sx={{
                          fontSize: '7px',
                          color: 'white',
                          backgroundColor: 'orange',
                          borderRadius: '100px',
                        }}

                >In progress</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
