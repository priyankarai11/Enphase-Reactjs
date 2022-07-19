/** @format */

import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style";

const GetStatusofProgram = ({
  name,
  getDisplayStatus,
  homeowner,
  setApproved,
}) => {
  const classes = useStyles();
  const textFieldforAPS = [
    {
      name: "Site Id",
      value: homeowner.siteId,
    },
    {
      name: "Name of the customer",
      value: homeowner.first_name + " " + homeowner.last_name,
    },
    {
      name: "Email Address",
      value: homeowner.email,
    },
    {
      name: "Phone Number",
      value: homeowner.phone,
    },
    {
      name: "Address Line 1",
      value: homeowner.address1,
    },
    {
      name: "Address Line 2",
      value: homeowner.address2,
    },
    {
      name: "City",
      value: homeowner.city,
    },
    {
      name: "State",
      value: homeowner.state,
    },
    {
      name: "Zipcode",
      value: homeowner.zip,
    },
    {
      name: "kW capacity for data sharing",
      value: homeowner.capacity,
    },
    {
      name: "Program Option",
      value: homeowner.option,
    },
  ];

  const textFieldLease = [
    {
      name: "Name of the customer",
      value: homeowner.first_name + " " + homeowner.last_name,
    },
    {
      name: "Address",
      value: homeowner.address1 + " " + homeowner.address2,
    },
    {
      name: "City",
      value: homeowner.city,
    },
    {
      name: "State",
      value: homeowner.state,
    },
    {
      name: "ZipCode",
      value: homeowner.zip,
    },
    {
      name: "Electric Account Number",
      value: homeowner.EAN,
    },
    {
      name: "Program Payment Option Type",
      value: homeowner.payment,
    },
  ];

  const textFieldPseg = [
    {
      name: "Site Id",
      value: homeowner.siteId,
    },
    {
      name: "Customer First Name",
      value: homeowner.first_name,
    },
    {
      name: "Customer Last Name",
      value: homeowner.last_name,
    },
    {
      name: "Address Line 1",
      value: homeowner.address1,
    },
    {
      name: "Address Line 2",
      value: homeowner.address2,
    },
    {
      name: "City",
      value: homeowner.city,
    },
    {
      name: "State",
      value: homeowner.state,
    },
    {
      name: "Zipcode",
      value: homeowner.zip,
    },
    {
      name: "Primary Email Address",
      value: homeowner.email,
    },
    {
      name: "Phone Number",
      value: homeowner.phone,
    },
    {
      name: "DLRP Contracted Amount (kW)",
      value: homeowner.capacity,
    },
    {
      name: "PSEG Long Island Account Number",
      value: homeowner.EAN,
    },
    {
      name: "PSEG Long Island Electric Meter Number",
      value: homeowner.meter,
    },
  ];

  const getProgramDetails = () => {
    getDisabled();
    switch (name) {
      case "Battery Lease Program":
        return textFieldLease;
      case "APS Residential Battery Program":
        return textFieldforAPS;
      case "Battery Storage Rewards Program":
        return textFieldPseg;
    }
  };

  const getDisabled = () => {
    switch (name) {
      case "Battery Lease Program":
        return setApproved(7);
      case "APS Residential Battery Program":
        return setApproved(11);
      case "Battery Storage Rewards Program":
        return setApproved(13);
    }
  };

  return (
    <>
          {getProgramDetails().map((ele, index) => {
          return (
          <TextField
            key={index}
            className={classes.txtField}
            label={ele.name}
            value={ele.value}
            InputProps={{
              readOnly: true,
              endAdornment: getDisplayStatus(),
              className: classes.input,
            }}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        );
      })}
    </>
  );
};

export default GetStatusofProgram