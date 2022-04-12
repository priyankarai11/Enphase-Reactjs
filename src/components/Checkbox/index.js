import { useState } from "react";
import { FormGroup } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Link, Typography } from "@material-ui/core";
import { useStyles } from "./style";

function CheckboxContent({ checked, setChecked }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.checkbox}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onClick={() => setChecked(!checked)} />}
            label={
              <Typography className={classes.formControlLabel}>
                I confirm the following:
              </Typography>
            }
          />
        </FormGroup>
      </div>

      <div>
        <ul className={classes.listStyle}>
          <li className={classes.listItems}>
            I am authorised to submit the documents that I have uploaded using
            this site, and have received permission from the applicant to submit
            this information to Enphase on the applicant’s behalf.
          </li>
          <li className={classes.listItems}>
            I have read and understand{" "}
            <Link className={classes.linkRoot}>Enphase’s Privacy Policy</Link>{" "}
            and <Link className={classes.linkRoot}> Terms of Service </Link>
            (the “Policies”).
          </li>
          <li className={classes.listItems}>
            The applicant has acknowledged that they have read and understand
            the Policies.
          </li>
        </ul>
      </div>
    </>
  );
}

export default CheckboxContent;
