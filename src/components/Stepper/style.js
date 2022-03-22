import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  box: {
    marginRight: 20,
    marginLeft: 20,
  },
  stepIconRoot: {
    "&.MuiStepIcon-root.MuiStepIcon-active": {
      color: "#f37320",
    },
    "&.MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#f37320",
    },
  },
});

export { useStyles };
