import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  tabelCell: {
    "&.MuiTableCell-head": {
      color: "#F0D852",
      textAlign: "center",
    },
  },

  paper: {
    width: "100%",
    padding: 50,
  },

  tableRow: {
    "&.MuiTableCell-body": {
      textAlign: "center",
    },
  },

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
    width: 150,
  },

  noData: {
    width: 250,
    marginLeft: 50,
    marginTop:20,
  },

  root: {
    "&.MuiChip-root": {
      borderRadius: 15,
    },
  },

  link: {
    color: "#026ae3",
    cursor: "pointer",
  },

  tableContainer: {
    maxHeight: 450,
  },

  tableTop: {
    position: "sticky",
    top: 0,
  },

  loaderShow: {
    color: "#f37321",
    marginLeft: 300,
    marginTop: 100,
    "@media (min-width: 1000px)": {
      marginLeft: 800,
    },
  },
});

export { useStyles };
