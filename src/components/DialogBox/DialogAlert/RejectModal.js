/** @format */

import { useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";
import { TOKEN, PERSON_ID, CARD_NAME } from "../../sessionStorage";
import { useStyles } from "./style";

const Approve = ({
  setOpen,
  open,
  applicationId,
  timestamp,
  setIsActive,
  dataStatus,
}) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const data = {
    application_status: dataStatus,
    last_modified_by: "dummy_cs@gmail.com",
    message: value,
    timestamp: timestamp,
  };

  const submittedForm = async () => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    await fetch(
      `https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/${applicationId}/status/update`,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        setOpen(false);
        setIsActive(0);
        toast.success("Application rejected successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {/* {isLoading && <CircularProgress className={classes.loaderShow} />} */}
      <Dialog open={open}>
        <DialogContent>
          <DialogActions className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </DialogActions>
          <DialogContentText className={classes.formText}>
            Please provide a reason for rejection bellow
          </DialogContentText>
        </DialogContent>
        <div>
          <textarea className={classes.textarea} onChange={handleChange} />
        </div>
        <DialogActions className={classes.buttonControl}>
          <Button
            variant="contained"
            className={classes.buttonSubmit}
            onClick={submittedForm}
            disabled={!value}
          >
            SUBMIT
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedbuttonsSubmit}
            onClick={handleClose}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Approve;
