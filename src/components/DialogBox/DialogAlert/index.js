import { useEffect,useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNavigate } from "react-router";
import { TOKEN ,PERSON_ID,CARD_NAME} from "../../sessionStorage";
import { useStyles } from "./style";

const App = ({ setOpen, open,input}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const submittedForm =async () => {
    const data=input;
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
   await fetch(
      `https://gs-dev.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/add`,
      {
        method: "POST",
        headers: myHeaders,
        body:JSON.stringify(data)
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        navigate(`/aps-application-tracker/${PERSON_ID}/${CARD_NAME}`);
        // const set = res.data.map((ele) => ele);
      });
  };

  return (
    <div>
       {/* {isLoading && <CircularProgress className={classes.loaderShow} />} */}
      <Dialog open={open} >
        <DialogContent>
          <DialogActions className={classes.closeButton} onClick={handleClose}>
           <CloseIcon />
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
