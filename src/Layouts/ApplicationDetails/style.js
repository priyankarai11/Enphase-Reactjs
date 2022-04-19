import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listItem: {
    display: "flex",
  },

  information: {
    height: 1250,
    margin: 20,
    flexDirection: "column",
    "@media (min-width: 1000px)": {
      height: 860,
    },
  },

  textField: {
    width: "90%",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
    color: "#757575",
    "@media (min-width: 1000px)": {
      width: "85%",
    },
  },

  textfieldLabel: {
    "&.Mui-focused": {
      color: "#f37320",
      borderColor: "#f37320",
    },
    "&.Mui-error": {
      color: "red",
    },
  },

  textFieldEnphase: {
    marginTop: 10,
    marginBottom: 20,
  },

  textFieldDetails: {
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
    color: "#757575",
    fontSize: 12,
    fontFamily: "Roboto, sans-serif",
  },

  enphaseField: {
    fontSize: "1rem",
    fontFamily: "Roboto",
    marginLeft: 30,
    marginBottom: 10,
    border:"none"
  },

  enphaseBattery: {
    float: "right",
    marginRight: 50,
    "@media (min-width: 1000px)": {
      marginRight: 90,
    },
  },

  enterTheDetail: {
    height: 1100,
    margin: 20,
    flexDirection: "column",
    "@media (min-width: 1000px)": {
      height: 720,
    },
  },

  tableContainer: {
    maxHeight: 450,
  },

  decrementButton: {
    borderRadius: 1,
    marginRight: 30,
    "@media (min-width: 1000px)": {
      marginRight: 50,
    },
  },

  IncrementCount: {
    borderRadius: 1,
    marginLeft: 30,
    "@media (min-width: 1000px)": {
      marginLeft: 50,
    },
  },

  countNumber: {
    padding: 20,
  },

  detailInformation: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },

  topContents: {
    color: "#f37320",
    padding: 20,
    backgroundColor: "#0000001A",
    "@media (min-width: 1000px)": {
      width: "95%",
    },
  },

  fileuploaderContent: {
    color: "#f37320",
    padding: 26,
    backgroundColor: "#0000001A",
    marginTop: 30,
    "&.MuiCardContent-root": {
      padding: 36,
    },
    "@media (min-width: 1000px)": {
      marginTop: 0,
    },
  },

  uploadFile: {
    width: 240,
    height: 260,
    marginLeft: 30,
    marginTop: 30,
    borderStyle: "dotted",
    borderColor: "#70707089",
    paddingBottom: 20,
  },

  fileCardContent: {
    background: "#F5F5F5",
  },

  scannedCopy: {
    textAlign: "center",
    fontSize: 14,
  },

  fileConditions: {
    color: "#545456",
    textAlign: "center",
    marginTop: 5,
    fontSize: 12,
  },

  uploadingFile: {
    width: "100%",
  },

  UpArrow: {
    marginLeft: 80,
  },

  submitForm: {
    "&.MuiButton-root": {
      background: "#ff4800",
      marginLeft: 40,
      marginRight: 40,
      color: "#ffffff",
      borderRadius: 4,
      height: 36,
      width: 150,
    },
    "&.MuiButton-root.Mui-disabled": {
      opacity: 0.5,
      background: "#ff4800",
      color: "#ffffff",
    },
    "&.MuiButton-root:hover": {
      background: "#f37320",
    },
  },

  buttonSection: {
    height: 100,
    float: "right",
  },

  previousPage: {
    "&.MuiButton-outlined": {
      borderColor: "#f37320",
      color: "#f37320",
      borderRadius: 4,
      height: 36,
      width: 150,
    },
    "&.MuiButton-root:hover": {
      border: "1px solid #f37320",
    },
  },

  listStyle: {
    marginLeft: 70,
  },

  linkRoot: {
    color: "#f37320",
  },

  listContents: {
    marginBottom: 50,
  },

  checkbox: {
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 10,
  },

  listItems: {
    marginBottom: 16,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  formControlLabel: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});

export { useStyles };
