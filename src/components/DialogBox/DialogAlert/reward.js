/** @format */

import { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNavigate } from "react-router";
import { TOKEN, PERSON_ID, CARD_NAME } from "../../sessionStorage";
import { useStyles } from "./style";

const App = ({ setOpen, open, homeowner_info, csvFile,pdfFileOne,pdfFileTwo }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const payload = {
    homeowner_info,
    source_portal: "INTAKE",
    program_id: PERSON_ID,
    site_id: homeowner_info.site_id,
  };

  const submittedForm = async () => {
    const formData = new FormData();
    const json = JSON.stringify(payload);
    const blob = new Blob([json], {
      type: "application/json",
    });
    formData.append("application_form", blob);
      formData.append("tandc_form", pdfFileTwo);
      formData.append("enrollment_form", csvFile);
      formData.append("signed_form1", pdfFileOne);
      
    const signed2 = new Blob([], {
      type: "multipart/form-data",
    });

    formData.append("signed_form2", signed2);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    const myHeaders = new Headers({
      // "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    await fetch(
      `https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/new`,
      {
        method: "POST",
        headers: myHeaders,
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        navigate(`/aps-application-tracker/${PERSON_ID}/${CARD_NAME}`);
        // const set = res.data.map((ele) => ele);
      });
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
