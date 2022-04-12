import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  dialog: {
    padding: "20 24",
  },

  formText: {
    color: "#565657",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
    width: 500,
    paddingLeft: 40,
    paddingRight: 40,
  },

  buttonControl: {
    padding: 20,
  },

  buttonSubmit: {
    color: "#ffffff",
    width: "30%",
    display: "block",
    background: "#F37320",
    minHeight: 48,
    borderRadius: 4,
    marginRight: 150,
    "&.MuiButton-root:hover": {
      background: "#F37320",
    },
  },

  closeButton: {
    cursor: "pointer",
    color: "grey",
    height: 50,
    fontWeight: "bold",
  },

  outlinedbuttonSubmit: {
    "&.MuiButton-outlined": {
      color: "#F37320",
      width: "30%",
      display: "block",
      minHeight: 48,
      borderRadius: 4,
      marginRight: 15,
      borderColor: "#F37320",
    },
  },
});

export { useStyles };
