import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dashboardTracker: {
    marginTop: 30,
    paddingLeft: 50,
  },

  batteryTracker: {
    color: "#f37320",
  },

  submitNewApplication: {
    color: "#f37320",
  },

  submitApplication: {
    color: "#335977",
    paddingLeft: 50,
    marginTop: 45,
    marginRight: 50,
    textAlign: "left",
    font: "normal normal bold 29px/29px Roboto",
    "@media (min-width: 1000px)": {
      marginTop: 65,
    },
  },

  document: {
    float: "right",
    height: 50,
    marginRight: 100,
    marginTop: 10,
    marginBottom: 20,
    width: 270,

    "&.MuiButton-outlined": {
      color: "#f37320",
      borderColor: "#f37320",
    },
  },

  submitNewApplnSection: {
    display: "flex",
    flexDirection: "column",

    "@media (min-width: 1000px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  newApplicationSection: {
    marginTop: 30,
    "@media (min-width: 1000px)": {
      marginTop: 50,
    },
  },

  listStyle: {
    marginLeft: 70,
    marginBottom: 20,
    fontSize: 15,
    fontFamily: "Helvetica Neue",
    fontWeight: "normal",
    letterSpacing: 0,
  },

  linkRoot: {
    color: "#f37320",
  },

  buttonSection: {
    height: 100,
    float: "right",
  },

  previousPage: {
    "&.MuiButton-outlined": {
      borderColor: "grey",
      color: "#f37320",
    },
    borderRadius: 4,
    height: 36,
    width: 150,
  },

  submitForm: {
    background: "#f37320",
    marginLeft: 40,
    marginRight: 40,
    color: "white",
    borderRadius: 4,
    height: 36,
    width: 150,
  },
});

export { useStyles };
