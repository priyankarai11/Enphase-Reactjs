import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: 50,
    marginTop: 30,
  },

  table: {
    minWidth: 100,
  },

  arrow: {
    color: "orange",
    float: "right",
    marginTop: 10,
  },

  card_view: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },

  cardview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginTop: 10,
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },

  cardItems: {
    "&.MuiTypography-root": {
      fontFamily: "Segoe UI",
    },
  },

  cardsDisplay: {
    "&.MuiCardContent-root:last-child": {
      paddingBottom: 5,
    },
  },

  residental: {
    paddingBottom: 20,
    fontFamily: "Segoe UI",
    fontWeight: 600,
    fontSize: 25,
    width: 370,
  },

  loaderShow: {
    color: "#f37321",
    marginLeft: 300,
    marginTop: 100,
    "@media (min-width: 1000px)": {
      marginLeft: 800,
    },
  },
});

export { useStyles };
