import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  menu: {
    marginLeft: -18,
    marginTop: 20,
    width: 250,
  },

  contact: {
    "&.MuiMenuItem-root": {
      color: " #6F6F6F",
      backgroundColor: "#ffffff",
      marginLeft: -4,
      marginTop: -8,
      fontSize: 15,
      textTransform: "none",
      fontWeight: 500,
      width: 190,
      fontFamily: "Roboto, sans-serif",
      "&.Mui-focusVisible": {
        backgroundColor: "white",
      },
    },
  },

  logOut: {
    "&.MuiMenuItem-root": {
      color: " #6F6F6F",
      backgroundColor: "#ffffff",
      marginLeft: -1,
      marginTop: -8,
      width: 72,
      fontSize: 15,
      textTransform: "none",
      fontWeight: 500,
      fontFamily: "Roboto, sans-serif",
      "&.Mui-focusVisible": {
        backgroundColor: "#ffffff",
      },
    },
  },
});

export { useStyles };
