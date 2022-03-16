import React, { useState } from "react";
import "./style";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import { Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import ModalBox from "../../components/ModalBox/index";
import Menu from "../../components/Menu";
import useModal from "../../components/ModalBox/useModal";
import Header from "../../components/Header/index"

function Index() {
  const classes = useStyles();
  let name = sessionStorage.getItem("user_name");
  const { isShowing, toggle } = useModal();

  const submitNewAppln = () => {
    window.location.href = "/submit-new-application";
  };

  return (
    <>
      <div className="centered">
        <img src={Logo} className="logo" />
        <label className="profileName">Hi {name}</label>
        <img className="profile_img" src={Profile} />

        <h3 className="Grid">Grid Services-Installer Intake Portal</h3>
      </div>
      <div>
        <Breadcrumbs
          className={classes.dashboardTracker}
          separator="›"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Typography className={classes.batteryTracker}>
            APS Residential Battery Program
          </Typography>
        </Breadcrumbs>
      </div>

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
          <Button
            variant="outlined"
            className={classes.newApplication}
            onClick={toggle}
          >
            SEE HOW APPLICATION PROCESS WORKS
          </Button>
          <Button
            variant="outlined"
            className={classes.newApplication}
            onClick={submitNewAppln}
          >
            SUBMIT NEW APPLICATION
          </Button>
          <ModalBox isShowing={isShowing} hide={toggle} />
        </div>
      </div>

      <Menu />
    </>
  );
}

export default Index;
