import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { FormGroup } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import Stepper from "../../components/Stepper/index";
import ApplicationDetails from "../../Layouts/ApplicationDetails/index";
import { useStyles } from "./style";

function Index() {
  const classes = useStyles();
  let name = sessionStorage.getItem("user_name");

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
          <Link underline="hover" color="inherit" href="/home">
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
      <div>
        <Stepper />
        <ApplicationDetails />
      </div>

      <div className={classes.checkbox}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I confirm the following: "
          />
        </FormGroup>
        <div>
          <ul className={classes.listStyle}>
            <li>
              I am authorised to submit the documents that I have uploaded using
              this site, and have received permission from the applicant to
              submit this information to Enphase on the applicant’s behalf.
            </li>
            <li>
              I have read and understand{" "}
              <Link className={classes.linkRoot}>Enphase’s Privacy Policy</Link>{" "}
              and <Link className={classes.linkRoot}> Terms of Service </Link>
              (the “Policies”).
            </li>
            <li>
              The applicant has acknowledged that they have read and understand
              the Policies.
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.buttonSection}>
        <Button variant="outlined" className={classes.previousPage}>
          Back
        </Button>
        <Button variant="contained" className={classes.submitForm}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default Index;
