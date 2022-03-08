import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buttonForm: {
    padding: 10,
  },

  styleTable: {
    backgroundColor: "#335977",
  },
  dashboardTracker: {
    color: "grey",
    marginTop: 30,
    paddingLeft: 50,
  },
  batteryTracker: {
    color: "#f37320",
    marginLeft: 140,
    marginTop: -24,
  },
  applicationTracker: {
    color: "#335977",
    paddingLeft: 50,
    marginTop: 50,
  },
  newApplication: {
    color: "#f37320",
    float: "right",
    borderColor: "#f37320",
    height: 45,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  appProcess: {
    color: "#f37320",
    float: "right",
    borderColor: "#f37320",
    height: 45,
    width: 201,
    marginTop: 10,
    marginRight: 50,
  },
  noXMargin: {
    marginLeft: "0px",
    marginRight: "0px",
  },
  round: {
    borderRadius: "10px",
    width: "15px",
    height: "15px",
  },
});

export { useStyles };
