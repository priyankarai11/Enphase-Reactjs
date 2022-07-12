import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1040,
    width: "200vw",
    height: "200vh",
    backgroundColor: "#000",
    opacity: 0.5,
  },

  modalWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1050,
    width: "200%",
    height: "200%",
    overflowX: "hidden",
    overflowY: "auto",
    outline: 0,
  },

  modal: {
    zIndex: 100,
    background: "white",
    position: "relative",
    marginTop: 220,
    marginLeft: 150,
    borderRadius: 3,
    maxWidth: 500,
    padding: 10,
    paddingBottom: 20,
    marginRight: 100,
    "@media (min-width: 1000px)": {
      marginTop: 200,
      marginLeft: 550,
      marginRight: 100,
    },
  },

  modalCloseButton: {
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: 1,
    color: "#000",
    opacity: 0.5,
    cursor: "pointer",
    border: "none",
    float: "right",
    marginTop: 10,
    marginRight: 20,
  },

  Numbers_Logo: {
    width: 39,
    marginTop: 30,
  },

  downloadEneryHub: {
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  downloadDocument: {
    color: "#f37320",
    marginLeft: 135,
  },

  nextButton: {
    float: "right",
    marginTop: 20,
    borderStyle: "none",
    fontWeight: 700,
  },

  mobileStepper: {
    marginTop: 10,
    backgroundColor: "white",
    fontWeight: 500,
    "&.MuiMobileStepper-root": {
      backgroundColor: "white",
    },
  },

  tagLine: {
    color: "grey",
    textAlign: "center",
    fontSize: 14,
  },

  groupProfile_Logo: {
    width: 150,
    marginLeft: 170,
    // marginTop:50,
  },

  viewButtonLabel: {
    // ".MuiButton-label": {
    fontSize: 20,
    // },
  },
});

export { useStyles };
