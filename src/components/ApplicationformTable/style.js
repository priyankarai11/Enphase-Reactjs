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
  roundIcon: {
    borderRadius: "10px",
    width: "15px",
    height: "15px",
  },
  labelStyle: {
    width: 180,
  },
  root: {
    "&.MuiChip-root": {
      borderRadius: 0,
    },
  },
});

export { useStyles };
