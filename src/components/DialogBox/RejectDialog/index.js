/** @format */

import { useEffect, useState } from "react";
import { Box, Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./style";

const RejectDialog = ({ setOpen, open,message }) => {
    const classes = useStyles();
 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} className={classes.centered}>
      <DialogContent>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        <DialogActions onClick={handleClose} className={classes.reason}>
          Rejection Reason
        </DialogActions>
              <div className={classes.message}>{message}</div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          className={classes.outlinedbuttonsSubmit}
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RejectDialog;
