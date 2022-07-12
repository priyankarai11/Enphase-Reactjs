/** @format */

import { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TOKEN } from "../../sessionStorage";
import { details , file1, file2,file3} from "./constant";
import { toast } from "react-toastify";
import { useStyles } from "./style";

const DownloadDocument = ({
  setOpen,
  open,
}) => {
    const classes = useStyles();
  const [item, setItem] = useState("");

  const handleClose = () => {
     setOpen(false)
  }
    
    const downloadFunc = (id) => {
        switch (id)
        {
          case 0: setItem(file1);
            break;
          case 1: setItem(file2);
            break;
          case 2: setItem(file3);
            break;
      }
       toast.success("File downloading !", {
         position: toast.POSITION.TOP_CENTER,
       });
  }
   
  return (
    <div>
      {/* {isLoading && <CircularProgress className={classes.loaderShow} />} */}
      <Dialog open={open}>
        <DialogContent>
          <CloseIcon className={classes.closeIcon} onClick={handleClose} />
          <DialogActions onClick={handleClose} className={classes.reason}>
            Download Program Documents
          </DialogActions>
          <div className={classes.downloadSec}>
            {details.map((ele, index) => {
              return (
                <DialogContentText key={index} className={classes.document}>
                  {ele.name}
                  <a target="_blank" href={item} >
                  <img
                    src={ele.img}
                    className={classes.download}
                    onClick={() => downloadFunc(index)}
                    />
                  </a>
                </DialogContentText>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
     
    </div>
  );
};

export default DownloadDocument;
