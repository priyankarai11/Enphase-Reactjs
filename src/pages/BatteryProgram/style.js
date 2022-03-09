import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buttonForm: {
    padding: 10,
  },

  dashboardTracker: {
    marginTop: 30,
    paddingLeft: 50,
  },
  batteryTracker: {
    color: "#f37320",
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

  roundIcon: {
    borderRadius: "10px",
    width: "15px",
    height: "15px",
  },
  labelStyle: {
    width: 160,
  },
});

export { useStyles };
