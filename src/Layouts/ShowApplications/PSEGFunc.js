/** @format */
import React, { useState,useEffect } from "react";
import ApprovedStatus from "./ApprovedStatus";
import checkBox from "../../assets/icons/checkBox.png";
import { useStyles } from "./style";

const PSEGFunc = ({
  countIncrement,
  getValue,
  countDecrement,
  getApprovedClick,
  getRejectedClick,
  setCheckedOne,
  applicationId,
}) => {
  const classes = useStyles();
  const [vals, setVals] = useState(true);
  const [ites, setItes] = useState(true);

  const getApproved = () => {
    setVals(false);
    setItes(true);
    getApprovedClick();
    if (vals === true) {
      countIncrement();
    } else countDecrement();
  };

  useEffect(() => {
    setVals(true);
  }, [applicationId]);

  const getUndoFunc = () => {
      vals === false && ites === true && getRejectedClick();
  };

  const getRejected = () => {
    setVals(!vals);
    setItes(false);
    getUndoFunc();
    setCheckedOne(false);
    if (vals === true) {
      countIncrement();
    } else {
      countDecrement();
    }
  };

  switch (getValue) {
    case 0:
      return (
        <ApprovedStatus
          vals={vals}
          ites={ites}
          getRejected={getRejected}
          getApproved={getApproved}
        />
      );

    case 1:
      return <div />;
    case 2:
      return (
        <div className={classes.approvedPart}>
          <img src={checkBox} className={classes.checkBox} alt="approved"/>
          <div className={classes.checkWithApprove}>Approved</div>
        </div>
      );
    case 3:
      return (
        <div className={classes.approvedPart}>
          <img src={checkBox} className={classes.checkBox} alt="approved" />
          <div className={classes.checkWithApprove}>Approved</div>
        </div>
      );
    default:
      return <div />;
  }
};

export default PSEGFunc;
