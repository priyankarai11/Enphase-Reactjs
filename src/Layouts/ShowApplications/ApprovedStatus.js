import React from "react";
import { TextField, Button } from "@material-ui/core";
import Reject from "../../assets/icons/reject.png";
import checkBox from "../../assets/icons/checkBox.png";
import { useStyles } from "./style";

const ApprovedStatus = ({ vals, ites, getApproved, getRejected }) => {
    const classes = useStyles();
    return (
      <div style={{ display: "flex" }}>
        <div>
          {vals ? (
            <Button
              variant="contained"
              className={classes.approveButton}
              onClick={() => {
                getApproved();
              }}
            >
              Approve
            </Button>
          ) : ites ? (
            <div className={classes.approvedPart}>
              <img src={checkBox} className={classes.checkBoxed} />
              <div className={classes.checkWithApproved}>Approved</div>
            </div>
          ) : (
            <div className={classes.approvedPart}>
              <img src={Reject} className={classes.checkBoxed} />
              <div className={classes.checkWithApproved}>Rejected</div>
            </div>
          )}
        </div>
        <div>
          <Button
            variant="outlined"
            className={classes.rejectButton}
            onClick={() => getRejected()}
          >
            {vals ? "Reject" : "Undo"}
          </Button>
        </div>
      </div>
    );
}
export default ApprovedStatus;