import React from "react";
import Table from "@mui/material/Table";
import { useStyles } from "./style";
import { TableBody, TableContainer } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TablePagination } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { stockData } from "./data";
import { FaSlidersH } from "react-icons/fa";
import ChipItem from "../Chip";

function ApplicationformTable({ open, handleClick }) {
  const classes = useStyles();
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell className={classes.tabelCell}>
                APPLICATION ID
              </TableCell>
              <TableCell className={classes.tabelCell}>
                ENPHASE SITE ID
              </TableCell>
              <TableCell className={classes.tabelCell}>
                HOME OWNER FULL NAME
              </TableCell>
              <TableCell className={classes.tabelCell}>
                INSTALLER NAME
              </TableCell>
              <TableCell className={classes.tabelCell}>
                APPLICATION STATUS
                <FaSlidersH
                  className={classes.filter}
                  onClick={handleClick}
                  id="demo-positioned-menu"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody lassName={classes.tableBody}>
            {stockData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow>
                    <TableCell className={classes.tableRow}>
                      <a href="/application-Id-tracker">{data.id}</a>
                    </TableCell>
                    <TableCell className={classes.tableRow}>
                      {data.siteId}
                    </TableCell>
                    <TableCell className={classes.tableRow}>
                      {data.ownername}
                    </TableCell>
                    <TableCell className={classes.tableRow}>
                      {data.installerName}
                    </TableCell>
                    <TableCell className={classes.tableRow}>
                      {data.applicationStatus}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={stockData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
export default ApplicationformTable;
