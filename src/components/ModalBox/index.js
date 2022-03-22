import React from "react";
import { Link, MobileStepper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Typography from "@material-ui/core/Typography";
import { modalData } from "./data";
import { useStyles } from "./style";

function Modal({ isShowing, hide }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = modalData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return isShowing ? (
    <>
      <div className={classes.modalOverlay} />
      <div
        className={classes.modalWrapper}
        aria-modal
        aria-hidden
        role="dialog"
      >
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <button
              type="button"
              className={classes.modalCloseButton}
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <img
            className={classes.Numbers_Logo}
            src={modalData[activeStep].imgPath}
          />
          <div>
            <img
              className={classes.groupProfile_Logo}
              src={modalData[activeStep].logo}
            />
          </div>

          <Typography className={classes.downloadEneryHub}>
            {modalData[activeStep].text}{" "}
          </Typography>
          <Link className={classes.downloadDocument}>
            {" "}
            {modalData[activeStep].tag}{" "}
          </Link>
          <Typography className={classes.tagLine}>
            {modalData[activeStep].tagline}
          </Typography>
          <MobileStepper
            className={classes.mobileStepper}
            modalData={maxSteps}
            position="static"
            steps={6}
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                className={{ label: classes.viewButtonLabel }}
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                NEXT
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                className={{ label: classes.viewButtonLabel }}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                BACK
              </Button>
            }
          />
        </div>
      </div>
    </>
  ) : null;
}

export default Modal;
