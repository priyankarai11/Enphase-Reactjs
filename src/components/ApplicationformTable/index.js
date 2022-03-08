import React from "react";
import Table from "@mui/material/Table";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TablePagination } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  tabelCell: {
    backgroundColor: "#335977",
    color: "yellow",
    minWidth: 150,
    textAlign: "center",
  },
  paper: {
    width: "100%",
    padding: 30,
    marginTop: 30,
  },
  alltableRow: {
    textAlign: "center",
  },
  tableContainer: {
    maxHeight: 450,
  },
});

function Index({ columns, rows, page, rowsPerPage }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className={classes.tabelCell}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow className={classes.tableRow}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            className={classes.alltableRow}
                            key={column.id}
                          >
                            {/* <Link
                              to={`/elsewhere/${column.id}`}
                              style={{
                                textDecoration: "none",
                              }}
                            >
                              {}
                            </Link> */}
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
        />
      </Paper>
    </>
  );
}

export default Index;
