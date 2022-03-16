import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  dashboardTracker: {
    marginTop: 30,
    paddingLeft: 50,
  },
  viewApplication: {
    color: "#f37320",
  },
  applicationTracker: {
    color: "#335977",
    paddingLeft: 50,
    marginTop: 30,
  },
  roundIcon: {
    borderRadius: "10px",
    width: "15px",
    height: "15px",
  },
  chip: {
    marginLeft: 50,
    marginTop: 20,
    "@media (min-width: 1000px)": {
      marginLeft: 338,
      marginTop: -50,
    },
  },
  stepper: {
    "& .MuiStepIcon-active": { color: "gray" },
    "& .MuiStepIcon-completed": { color: "#f37320" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "gray" },
  },
  box: {
    marginRight: 20,
    marginLeft: 20,
  },
  information: {
    height: 1250,
    margin: 20,
    flexDirection: "column",
    "@media (min-width: 1000px)": {
      height: 860,
    },
  },
  headerofCard: {
    color: "#f37320",
    padding: 20,
    backgroundColor: "#0000001A",
    "@media (min-width: 1000px)": {
      width: "160%",
    },
  },

  secondheaderofCard: {
    color: "#f37320",
    padding: 20,
    backgroundColor: "#0000001A",
    "@media (min-width: 1000px)": {
      width: "160%",
      marginLeft: 350,
    },
  },
  listItem: {
    display: "flex",
  },
  applicationDetails: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },
  fileUploader: {
    width: 255,
    height: 280,
    margin: 30,
    borderStyle: "dotted",
    borderColor: "grey",
    backgroundColor: "#0000001A",
    paddingBottom: 20,
    "@media (min-width: 1000px)": {
      marginLeft: 380,
    },
  },
  pdfIcon: {
    marginLeft: 80,
  },
  scannedCopy: {
    textAlign: "center",
    marginTop: 30,
  },
  fileSelected: {
    color: "grey",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 60,
  },
  pdfDownload: {
    marginLeft: 30,
    marginTop: 10,
  },
  downloadAppln: {
    marginTop: -26,
    marginLeft: 80,
  },

  batteryDetails: {
    marginLeft: 15,
  },

  chipLabel: {
    marginTop: -52,
    marginLeft: 125,
  },
  backtoApplicationTracker: {
    float: "right",
    color: "#F37320",
    width: 200,
    height: 32,
    fontSize: 16,
    marginTop: -20,
  },
  back: {
    height: 80,
    width: "100%",
  },
  nextButton: {
    margin: 20,
  },
});
