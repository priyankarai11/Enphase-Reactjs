import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formInputFields: {
    width: "100%",
  },
  loader: {
    position: "fixed",
    textAlign: "center",
    marginTop: 100,
    color: "#f37321",
    "@media (min-width: 1000px)": {
      position: "absolute",
      marginLeft: -422,
      marginTop: 150,
    },
  },
});

export { useStyles };
