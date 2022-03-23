import React from "react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { FormGroup } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";

import { useStyles } from "../../pages/ApplicationIdTracker/style";

function Index() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.information}>
        <div className={classes.applicationDetails}>
          <Typography className={classes.headerofCard}>
            Enter the following Details
          </Typography>
        </div>
        <div className={classes.textFieldSection}>
          <TextField
            className={classes.textField}
            label="Customer First Name"
          />
          <br />
          <TextField className={classes.textField} label="Customer Last Name" />
        </div>

        {/* <div className={classes.checkbox}>
            <FormGroup>
              <FormControlLabel
                className={classes.formControl}
                control={<Checkbox defaultChecked />}
                label="I confirm the following: "
              />
            </FormGroup>
          </div>
          <div className={classes.listContents}>
            <ul className={classes.listStyle}>
              <li>
                I am authorised to submit the documents that I have uploaded
                using this site, and have received permission from the applicant
                to submit this information to Enphase on the applicant’s behalf.
              </li>
              <li>
                I have read and understand{" "}
                <Link className={classes.linkRoot}>
                  Enphase’s Privacy Policy
                </Link>{" "}
                and <Link className={classes.linkRoot}> Terms of Service </Link>
                (the “Policies”).
              </li>
              <li>
                The applicant has acknowledged that they have read and
                understand the Policies.
              </li>
            </ul>
          </div> */}
      </Card>
    </>
  );
}

export default Index;
