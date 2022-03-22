import React from "react";
import { Card } from "@material-ui/core";
import { Stepper } from "@material-ui/core";
import { Step } from "@material-ui/core";
import { StepLabel } from "@material-ui/core";
import { steps } from "./constant";
import { useStyles } from "./style";

function CustomStepper() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.box}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  classes: { root: classes.stepIconRoot },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Card>
    </>
  );
}

export default CustomStepper;
