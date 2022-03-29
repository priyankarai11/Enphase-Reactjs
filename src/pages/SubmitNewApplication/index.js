import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import ProfileHeader from "../../components/Profile";
import Stepper from "../../components/Stepper/index";
import { useStyles } from "./style";

function Index() {
  const classes = useStyles();
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
          <Link
            underline="hover"
            color="inherit"
            href="/aps-application-tracker"
          >
            APS Residential Battery Program
          </Link>
          <Typography className={classes.submitNewApplication}>
            Submit new application
          </Typography>
        </Breadcrumbs>
      </div>

      <div className={classes.submitNewApplnSection}>
        <div>
          <Typography
            className={classes.submitApplication}
            variant="h5"
            component="h2"
          >
            Submit new application
          </Typography>
        </div>
        <div className={classes.newApplicationSection}>
          <Button variant="outlined" className={classes.document}>
            DOWNLOAD T&C DOCUMENTS FOR HOMEOWNERS SIGNATURES
          </Button>
        </div>
      </div>
      <Stepper />
    </>
  );
}

export default Index;
