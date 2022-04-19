import { useEffect } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from '@mui/icons-material/Close';
import { TOKEN } from "../../sessionStorage";
import { useStyles } from "./style";
const App = ({ setOpen, open,homeowner_info}) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  console.log(homeowner_info)

  const submittedForm = () => {
    const data={homeowner_info};
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    fetch(
      `https://gs-dev.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/add`,
      {
        method: "POST",
        headers: myHeaders,
        body:JSON.stringify(data)
      }
    )
      .then((response) => response.json())
      // .then((res) => {
      //   // const set = res.data.map((ele) => ele);
      //   console.log(res)
      // });
  };

  return (
    <div>
      <Dialog open={open} >
        <DialogContent>
          <DialogActions className={classes.closeButton} onClick={handleClose}>
            X
          </DialogActions>
          <DialogContentText className={classes.formText}>
            Are you sure you want to submit the application ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonControl}>
          <Button
            variant="contained"
            className={classes.buttonSubmit}
            onClick={submittedForm}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedbuttonsSubmit}
            onClick={handleClose}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
