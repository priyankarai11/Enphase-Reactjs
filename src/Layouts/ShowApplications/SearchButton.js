/** @format */
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import checkBox from "../../assets/icons/checkBox.png";
import Reject from "../../assets/icons/reject.png";
import { useStyles } from "./style";

const SearchButton = ({
  countIncrement,
  getValue,
  countDecrement,
  getApprovedClick,
  getRejectedClick
}) => {
  const classes = useStyles();
  const [vals, setVals] = useState(true);
  const [ites, setItes] = useState(true);

  const getApproved = () => {
    setVals(false);
    setItes(true);
     getApprovedClick() 
    if (vals === true) {
      countIncrement();
    } else countDecrement();
  };

  const getUndoFunc = () => {
   {vals == false && ites===true &&  getRejectedClick() }
  }

  const getRejected = () => {
    setVals(!vals);
    setItes(false);
    getUndoFunc();
    if (vals === true) {
      countIncrement();
    } else{ countDecrement();}
  };

  switch (getValue) {
    case 0:
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

    case 1:
      return (
        <div className={classes.approvedPart}>
          <img src={checkBox} className={classes.checkBox} />
          <div className={classes.checkWithApprove}>Approved</div>
        </div>
      );
    case 2:
      return <div />;
  }
};

export default SearchButton
