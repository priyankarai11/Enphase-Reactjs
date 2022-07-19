/** @format */
import React, { useState ,useEffect} from "react";
import checkBox from "../../assets/icons/checkBox.png";
import ApprovedStatus from "./ApprovedStatus"
import { useStyles } from "./style";


const SearchButton = ({
  countIncrement,
  getValue,
  countDecrement,
  getApprovedClick,
  getRejectedClick,
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

  const getUndoFunc = () => {
    {
      vals == false && ites === true && getRejectedClick();
    }
  };

  useEffect(() => {
  setVals(true)
  },[applicationId])

  const getRejected = () => {
    setVals(!vals);
    setItes(false);
    getUndoFunc();
    if (vals === true) {
      countIncrement();
    } else {
      countDecrement();
    }
  };

  const getStatusResult = () => {
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
  return getStatusResult();
};

export default SearchButton;
