import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  menu: {
    paddingLeft: 20,
    marginRight: 20,
    marginLeft: 20,
  },

  menuItem: {
    "&.MuiMenuItem-root": {
      color: "grey",
      marginLeft: 6,
    },
  },

  logOut: {
    "&.MuiButton-root": {
      color: "grey",
    },
  },
});

export { useStyles };
