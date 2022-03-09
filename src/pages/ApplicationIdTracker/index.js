import React from "react";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import { CardContent, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import pdfIcon from "../../assets/icons/pdf-Icon.svg";
import pdfDownload from "../../assets/icons/pdfDownload.svg";
import { Chip } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Stepper } from "@material-ui/core";
import { Step } from "@material-ui/core";
import { StepLabel } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { Link } from "@material-ui/core";


function Index() {
  const classes = useStyles();
  let name = sessionStorage.getItem("user_name");
  const backtosignInPage = () => {
    window.location.href = "/";
  };

  const steps = [
    "Download T&C Document",
    "Application submitted for APS Review",
    "Approved/Rejected by APS",
    "Unique Enphase Site ID provided",
    "Application submitted for Enphase Review",
    "Approved/Rejected by Enphase",
  ];
  return (
    <>
      <div className="centered">
        <img onClick={backtosignInPage} src={Logo} className="logo" />
        <label className="profileName">Hi {name}</label>
        <img className="profile_img" src={Profile} />

        <h3 onClick={backtosignInPage} className="Grid">
          Grid Services-Installer Intake Portal
        </h3>
      </div>

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
        <Typography className={classes.viewApplication}>
          View Application
        </Typography>
      </Breadcrumbs>
      <Typography className={classes.headerofApplTracker}>
        <Typography
          className={classes.applicationTracker}
          variant="h5"
          component="h2"
        >
          Applications ID: 40603
        </Typography>
        <Typography>
          <Chip
            className={classes.chip}
            avatar={
              <div
                className={classes.roundIcon}
                style={{ background: "yellow" }}
              ></div>
            }
            label="Submitted by APS Review"
            size="small"
            variant="outlined"
          />
        </Typography>
      </Typography>
      <div>
        <Card className={classes.box}>
          <Stepper className={classes.step} activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Card>
      </div>
      <div>
        <Card className={classes.information}>
          <div className={classes.applicationDetails}>
            <div className={classes.leftFormDetails}>
              <Typography className={classes.headerofCard}>
                Application Details
              </Typography>
              <List>
                <div className={classes.listItem}>
                  <ListItem>
                    <ListItemText
                      primary="Customer First Name"
                      secondary="Jason"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="KW Capacity committed for data sharing"
                      secondary="15.36"
                    />
                  </ListItem>
                </div>
                <div className={classes.listItem}>
                  <ListItem>
                    <ListItemText
                      primary="Customer Last Name"
                      secondary="Dulero"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Program Option"
                      secondary="Data and Dispatch"
                    />
                  </ListItem>
                </div>

                <div className={classes.listItem}>
                  <ListItem>
                    <ListItemText
                      primary="Email Address"
                      secondary="Jason.dulero@gmail.com"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Electric Account Number"
                      secondary="1000023123"
                    />
                  </ListItem>
                </div>
                <ListItem>
                  <ListItemText primary="Address Line 1 " secondary="9570" />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Address Line 2"
                    secondary="Trantow Dale"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="City" secondary="West Jabari" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="State" secondary="Arizona" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Zip" secondary="32442" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Phone Number"
                    secondary="764-504-7970"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Battery Details"
                    secondary="Encharge 3"
                    // secondary="Encharge 10"
                  />
                  {/* <Chip className={classes.chipLabel} label="1" size="small"/> */}
                  {/* <ListItemText secondary="Encharge 10" /> */}
                </ListItem>
              </List>
            </div>
            <div className={classes.rightScannedCopy}>
              <Typography className={classes.secondheaderofCard}>
                Files Uploaded
              </Typography>
              <Card className={classes.fileUploader}>
                <CardContent>
                  <img className={classes.pdfIcon} src={pdfIcon} />
                  <Typography className={classes.scannedCopy}>
                    Scanned Copy of Program T&C Document
                  </Typography>
                  <Typography className={classes.fileSelected}>
                    Filename_1.pdf
                  </Typography>
                  <img className={classes.pdfDownload} src={pdfDownload} />
                  <Typography className={classes.downloadAppln}>
                    Download Application Form
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Index;
