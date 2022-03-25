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
    marginTop: 20,
    color: "#757575",
    "@media (min-width: 1000px)": {
      width: "85%",
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
  },

  IncrementCount: {
    borderRadius: 1,
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
    padding: 20,
    backgroundColor: "#0000001A",
    marginTop: 30,
    "@media (min-width: 1000px)": {
      marginTop: 0,
    },
  },

  uploadFile: {
    width: 245,
    height: 255,
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
  },

  upload: {
    "&.MuiButton-outlined": {
      color: "#f37320",
      borderColor: "#f37320",
      marginTop: 10,
      marginLeft: 16,
      width: 171,
    },
  },

  fileConditions: {
    color: "#545456",
    textAlign: "center",
    marginTop: 5,
  },

  uploadingFile: {
    width: "100%",
  },

  UpArrow: {
    marginLeft: 80,
  },
});

export { useStyles };
