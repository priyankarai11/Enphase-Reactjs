import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import ModalBox from "../../components/ModalBox/index";
import Menu from "../../components/Menu/index";
import useModal from "../../components/ModalBox/useModal";
import RewardModal from "../../components/ModalBox/reward";
import ProfileHeader from "../../components/Profile";
import ShowApplications from "../../Layouts/ShowApplications/index";
import DocumentDownload from "../../components/DialogBox/DocumentDownload/downloadForm"
import { IS_INSTALLER } from "../../components/sessionStorage";
import { useStyles } from "./style";

function Index() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { name } = useParams();
  const [open, setOpen]=useState(false)
  localStorage.setItem("card_name", name);
  const { isShowing, toggle } = useModal();

  const submitNewAppln = () => {
    navigate(`/aps-submit-new-application-1/${name}`);
  };

  const handleOpen = () => {
    setOpen(true)
  }

  const isInstallerFunction = () => {
    return (
      <>
        <div className={classes.batteryProgramHeader}>
          <div>
            <Typography
              className={classes.applicationTracker}
              variant="h5"
              component="h2"
            >
              Applications Tracker
            </Typography>
          </div>
          <div className={classes.buttonSections}>
            {name === "Battery Storage Rewards Program" ? (
              <Button
                variant="outlined"
                className={classes.newApplication}
                onClick={handleOpen}
              >
                DOWNLOAD PROGRAM DOCUMENTS
              </Button>
            ) : (
              ""
            )}
            <Button
              variant="outlined"
              className={classes.newApplication}
              onClick={submitNewAppln}
            >
              {" "}
              SUBMIT NEW APPLICATION{" "}
            </Button>
            <Button
              variant="outlined"
              className={classes.newApplication}
              onClick={toggle}
            >
              SEE HOW APPLICATION PROCESS WORKS
            </Button>
            {name === "Battery Storage Rewards Program" ? (
              <RewardModal isShowing={isShowing} hide={toggle} />
            ) : (
              <ModalBox isShowing={isShowing} hide={toggle} />
            )}
            <DocumentDownload open={open} setOpen={setOpen} />
          </div>
        </div>
        <Menu name={name} />
      </>
    );
  }

  const ShowStatusOfApplication = () => {
    return (
      <>
        <div>
          <Typography
            className={classes.applicationTracker}
            variant="h5"
            component="h2"
          >
            Applications Tracker
          </Typography>
        </div>
        <ShowApplications name={name} />
      </>
    );
  }
  
  return (
    <>
      <ProfileHeader />
      <div>
        <Breadcrumbs
          className={classes.dashboardTracker}
          separator="›"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/iic-dashboard">
            Dashboard
          </Link>
          <Typography className={classes.batteryTracker}>{name}</Typography>
        </Breadcrumbs>
      </div>
      {IS_INSTALLER==="true" ? isInstallerFunction() : ShowStatusOfApplication() }
    </>
  );
}

export default Index;
