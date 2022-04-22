import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  
  formText: {
    color: "#565657",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
    width: 350,
  },

  buttonControl: {
  marginLeft:50,
  paddingBottom:20,
  marginRight:50,
  },

  buttonSubmit: {
    color: "#ffffff",
    width: "50%",
    display: "block",
    background: "#F37320",
    minHeight: 48,
    borderRadius: 4,
    "&.MuiButton-root:hover": {
      background: "#F37320",
    },
  },

  loaderShow: {
    color: "#f37321",
    marginLeft: 300,
    marginTop: 100,
    "@media (min-width: 1000px)": {
      marginLeft: 800,
    },
  },
  
  closeButton: {
    cursor: "pointer",
    color: "grey",
    height: 50,
    fontWeight: "bold",
  },

  outlinedbuttonsSubmit: {
    "&.MuiButton-outlined": {
      color: "#F37320",
      width: "50%",
      minHeight: 48,
      borderRadius: 4,
      marginLeft: 15,
      borderColor: "#F37320",
    },
  },
});

export { useStyles };
