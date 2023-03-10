import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Tables = ({ data, header, title }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          {/* <TableRow>
            <StyledTableCell>{title}</StyledTableCell>
          </TableRow> */}
          <TableRow>
            {header.map((headers) => (
              <StyledTableCell key={headers.field}>
                {headers.headerName}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.Unplanned}>
              <StyledTableCell component="th" scope="row">
                {row.Unplanned}
              </StyledTableCell>
              <StyledTableCell align="left">
                {parseFloat(row.Min).toFixed(2) !== "NaN"
                  ? parseFloat(row.Min).toFixed(2)
                  : ""}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Stops}</StyledTableCell>
              <StyledTableCell align="left">
                {parseFloat(row.OeeLoss * 100).toFixed(2) !== "NaN"
                  ? parseFloat(row.OeeLoss * 100).toFixed(2) + "%"
                  : ""}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
