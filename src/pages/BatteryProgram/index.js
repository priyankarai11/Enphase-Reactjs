import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import ModalBox from "../../components/ModalBox/index";
import Menu from "../../components/Menu/index";
import useModal from "../../components/ModalBox/useModal";
import ProfileHeader from "../../components/Profile";
import { useStyles } from "./style";

function Index() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { name } = useParams();
  sessionStorage.setItem("card_name", name);
  const { isShowing, toggle } = useModal();
  const submitNewAppln = () => {
    navigate("/aps-submit-new-application-1");
  };

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
          <ModalBox isShowing={isShowing} hide={toggle} />
        </div>
      </div>

      <Menu />
    </>
  );
}

export default Index;
