/** @format */

import { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import Exclamatory from "../../../assets/icons/exclamatory.png";
import { useStyles } from "./style";

const App = ({ setOpen, open,siteId } ) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
      setOpen(false);
  };

  return (
    <div>
      {/* {isLoading && <CircularProgress className={classes.loaderShow} />} */}
      <Dialog open={open}>
        <DialogContent>
          <DialogActions className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </DialogActions>
         <img src={Exclamatory} className={classes.exclamatory} alt="Exclamatory" />
          <DialogContentText className={classes.formText}>
            Please reject the application !
          </DialogContentText>
          <DialogContentText className={classes.formTexted}>
            The site with Enphase Site ID: {siteId} is not found.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
