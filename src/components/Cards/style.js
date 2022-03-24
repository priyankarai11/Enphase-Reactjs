import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    marginLeft: 20,
    marginTop: 30,
  },

  table: {
    minWidth: 100,
  },

  arrow: {
    color: "orange",
    float: "right",
  },

  card_view: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },

  cardview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (min-width: 1000px)": {
      flexDirection: "row",
    },
  },
});

export { useStyles };
