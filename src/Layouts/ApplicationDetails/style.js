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
});

export { useStyles };
