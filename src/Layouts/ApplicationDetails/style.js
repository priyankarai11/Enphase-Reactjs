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
    width: "100%",
    "&.MuiFormControl-root": {
      marginLeft: 30,
      width: "100%",
    },
  },

  MultipletextFieldSection: {
    marginLeft: 30,
    "&.MuiFormControl-root": {
      marginLeft: 30,
      width: "100%",
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

  formControl: {
    "&.MuiFormControl-root": {
      marginLeft: 30,
    },
  },

  checkbox: {
    marginLeft: 30,
  },

  listContents: {
    marginBottom: 50,
  },

  formControl: {
    "&.MuiFormControl-root": {
      marginLeft: 30,
    },
  },

  checkbox: {
    marginLeft: 30,
  },
});

export { useStyles };
