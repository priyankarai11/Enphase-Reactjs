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

  buttonSection: {
    height: 100,
    float: "right",
  },

  previousPage: {
    "&.MuiButton-outlined": {
      borderColor: "grey",
      color: "#f37320",
    },
    borderRadius: 4,
    height: 36,
    width: 150,
  },

  submitForm: {
    background: "#f37320",
    marginLeft: 40,
    marginRight: 40,
    color: "white",
    borderRadius: 4,
    height: 36,
    width: 150,
  },
});

export { useStyles };
