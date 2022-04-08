import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { StepLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { PERSON_ID, CARD_NAME } from "../sessionStorage";
import { useNavigate } from "react-router";
import Dialog from "../../components/DialogBox/DialogAlert/index";
import ApplicationForm from "../../Layouts/ApplicationDetails/index";
import { steps } from "./constant";
import { useStyles } from "./style";

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          {" "}
          <ApplicationForm />{" "}
        </div>
      );

    case 1:
      return "do step 2";
    case 2:
      return "do step 3";
    default:
      return "unknown step";
  }
}

export default function App({ handleClickOpen }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [isOpen, setisOpen] = useState(false);
  const handleBack = () => {
    console.log(activeStep);
    if (activeStep === 0) {
      navigate(`/aps-application-tracker/${PERSON_ID}/${CARD_NAME}`);
    } else setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Card className={classes.box}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const buttonProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepButton onClick={handleStep(index)} {...buttonProps}>
                  <StepLabel
                    StepIconProps={{
                      classes: { root: classes.stepIconRoot },
                    }}
                  >
                    {label}
                  </StepLabel>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Card>
      <div>
        <div>
          {getStepContent(activeStep)}

          <div className={classes.buttonSection}>
            <Button
              variant="outlined"
              className={classes.previousPage}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              className={classes.submitForm}
              disabled
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
