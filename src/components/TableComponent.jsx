import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(firstName,lastName,userName,age,Salary) {
  return { firstName,lastName,userName,age,Salary };
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    minHeight:300,
    marginLeft:'25px',
    marginRight:'100px',
    alignItems: 'center'
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>FirstName</StyledTableCell>
            <StyledTableCell align="right">LastName</StyledTableCell>
            <StyledTableCell align="right">UserName&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Age&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Salary&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.userName}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.salary}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}