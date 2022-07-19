/** @format */

import React from "react";
import PSEGFunc from "./PSEGFunc";
import SearchButton from "./SearchButton";
import GetStatusofProgram from "./GetStatusofProgram";

const ApplicationDetail = ({
  homeowner,
  name,
  getValue,
  countDecrement,
  getApprovedClick,
  getRejectedClick,
  countIncrement,
  setApproved,
  setCheckedOne,
  applicationId,
}) => {
  const getDisplayStatus = () => {
    return name === "Battery Storage Rewards Program" ? (
      <PSEGFunc
        countDecrement={countDecrement}
        getValue={getValue}
        countIncrement={countIncrement}
        getApprovedClick={getApprovedClick}
        getRejectedClick={getRejectedClick}
        setCheckedOne={setCheckedOne}
        applicationId={applicationId}
      />
    ) : (
      <SearchButton
        countDecrement={countDecrement}
        getValue={getValue}
        countIncrement={countIncrement}
        getApprovedClick={getApprovedClick}
        getRejectedClick={getRejectedClick}
        applicationId={applicationId}
      />
    );
  };

  return (
    <GetStatusofProgram
      name={name}
      getDisplayStatus={getDisplayStatus}
      homeowner={homeowner}
      setApproved={setApproved}
    />
  );
};


export default ApplicationDetail;
