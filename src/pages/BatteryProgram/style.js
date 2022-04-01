import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // buttonForm: {
  //   padding: 10,
  // },

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
    marginTop: 70,
    marginRight: 50,
    fontWeight: "bold",
    fontSize: 29,
    fontFamily: "Roboto",
    "@media (min-width: 1000px)": {
      marginTop: 65,
    },
  },

  newApplication: {
    height: 50,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
    width: 201,
    "&.MuiButton-outlined": {
      color: "#f37320",
      borderColor: "#f37320",
    },
  },

  labelStyle: {
    width: 160,
  },

  batteryProgramHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },

  buttonSections: {
    marginTop: 30,
    marginLeft: 50,
    "@media (min-width: 1000px)": {
      marginTop: 50,
      marginRight: 50,
    },
  },
});

export { useStyles };
