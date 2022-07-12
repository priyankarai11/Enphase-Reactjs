/** @format */

import { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { TOKEN, PERSON_ID, CARD_NAME } from "../../sessionStorage";
import { useStyles } from "./style";

const Approve = ({
  error,
  setError,
  setOpen,
  open,
  getItem,
  applicationId,
  timestamp,
  setIsActive,
  dataStatus,
  homeowner,
  flag,
  setFlag,
  getapprovedDescision,
}) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    application_approval_date: timestamp,
    application_status: dataStatus,
    last_modified_by: "dummy_cs@gmail.com",
    message: "",
    timestamp: timestamp,
  };

  const payload = {
    site_id: homeowner.siteId,
    utility_reference_id: getItem,
    homeowner_info: {
      first_name: homeowner.first_name,
      last_name: homeowner.last_name,
      phone: homeowner.phone,
      email_address: homeowner.email,
      city: homeowner.city,
      state: homeowner.state,
      zip: homeowner.zip,
      electric_account_number: homeowner.EAN,
      program_type: homeowner.option,
      address1: homeowner.address1,
      address2: homeowner.address2,
      kw_capacity_committed: homeowner.capacity,
      utility_meter_number: homeowner.meter,
    },
  };

  //  if (open === false) {
  //    isLoading && <CircularProgress className={classes.loaderShow} />;
  //    setFlag(true);
  //  }

  // const getapprovedDescision = () => {
  //   setOpen(false);
  //   setFlag(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const GetForm = async () => {
    let formData = new FormData();
    const json = JSON.stringify(payload);
    const blob = new Blob([json], {
      type: "application/json",
    });
    formData.append("application_form", blob);

    const myHeaders = new Headers({
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });

    await fetch(
      `https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/${applicationId}`,
      {
        method: "PUT",
        headers: myHeaders,
        body: formData,
      }
    )
      .then((response) => response.json())
      // .then((res) => {
      //   setIsLoading(false);
      //   setOpen(false);
      //   setIsActive(0);
      // });
  };

  const submittedForm = async () => {
    GetForm();
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
        if (res.error.code != 400) {
          setIsLoading(false);
          setOpen(false);
          setIsActive(0);
          toast.success("Application approved successfully !", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          setOpen(false);
          setFlag(true);
        }
      })
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent>
          <DialogActions className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </DialogActions>
          <DialogContentText className={classes.formText}>
            Are you sure you want to approve the application ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonControl}>
          <Button
            variant="contained"
            className={classes.buttonSubmit}
            onClick={() => {
              submittedForm();
            }}
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

export default Approve;
