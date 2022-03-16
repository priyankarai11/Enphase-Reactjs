import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  tabelCell: {
    "&.MuiTableCell-head": {
      color: "yellow",
      textAlign: "center",
    },
  },
  paper: {
    width: "100%",
    padding: 30,
    // marginTop: 30,
  },
  tableRow: {
    "&.MuiTableCell-body": {
      textAlign: "center",
    },
  },
  // tableContainer: {
  //   maxHeight: 450,
  // },
  tableHead: {
    backgroundColor: "#335977",
    minWidth: 150,
  },
  tableBody: {},
  filter: {
    marginLeft: 20,
  },
});

export { useStyles };
