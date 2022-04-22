import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { CardContent, Button } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { ListItem, Typography, Link } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Table, TableContainer } from "@mui/material";
import { useNavigate } from "react-router";
import DialogConfirm from "../../components/DialogBox/DialogAlert/index";
import {
  FIRSTNAME_ERROR,
  LASTNAME_ERROR,
  EMAIL_ERROR,
  ADDRESS1_ERROR,
  ADDRESS2_ERROR,
  CITY,
  STATE,
  ZIP,
  PHONENUMBER,
  ELECTRIC,
} from "../../components/Utils/Message/messageTypes";
import {
  EMAIL_REGEX,
  NUMBER_REGEX,
  ZIP_REGEX,
  STRING_REGEX,
} from "../../components/Utils/RegularExpression/constant";
import { PERSON_ID, CARD_NAME } from "../../components/sessionStorage";
import Checkbox from "../../components/Checkbox/index";
import UpArrow from "../../assets/icons/upArrow.svg";
import "./index.css";
import { useStyles } from "./style";

const values = [
  {
    value: "1",
    label: "Data Only",
  },
  {
    value: "2",
    label: "Data and Dispatch",
  },
];

function Index() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [upload, setUpload] = useState("UPLOAD");
  const [count1, setCount1] = useState(0);
  const [helperTextemail, setHelperTextEmail] = useState("");
  const [helperTextfirst_name, setHelperTextFirstName] = useState("");
  const [helperTextlastName, setHelperLastName] = useState("");
  const [helperTextaddress1, setHelperTextAddress1] = useState("");
  const [helperTextaddress2, setHelperTextAddress2] = useState("");
  const [helperTextcity, setHelperTextCity] = useState("");
  const [helperTextzip, setHelperTextZip] = useState("");
  const [helperTextstate, setHelperTextState] = useState("");
  const [helperTextpn, setHelperTextPN] = useState("");
  const [helperTextac, setHelperTextAC] = useState("");
  const [homeowner_info, setHomeowner_info] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    encharge3:0,
    encharge10:0,
    program_type:"".toUpperCase(),
    electric_account_number: "",
    kw_capacity_committed:0.00,
    source_portal:'INTAKE',
    program_id:PERSON_ID  
  },
  );

  const handleBack = () => {
    navigate(`/aps-application-tracker/${PERSON_ID}/${CARD_NAME}`);
  };

   

  const getCapacity = (encharge3,encharge10) => {
    var num = encharge3 * 1.28 + encharge10 * 3.84;
    var getCapacities = (Math.round(num * 100) / 100).toFixed(2);
    return setHomeowner_info({...homeowner_info, kw_capacity_committed:getCapacities})
  }

  const encharge3_Increment = () => {
    getCapacity(homeowner_info.encharge3+1,homeowner_info.encharge10);
    return setHomeowner_info(prev=>({
      ...prev, encharge3: prev.encharge3 + 1
    }))
}


const encharge3_Decrement=()=>{
  if(homeowner_info.encharge3<1)
  {
    getCapacity(homeowner_info.encharge3,homeowner_info.encharge10);
    return setHomeowner_info(prev=>({
      ...prev, encharge3:0}))
  }
  else{
    getCapacity(homeowner_info.encharge3-1,homeowner_info.encharge10);
    return setHomeowner_info(prev=>({
      ...prev, encharge3:prev.encharge3-1}))
  }
}

const encharge10_Increment=()=>{
  getCapacity(homeowner_info.encharge3,homeowner_info.encharge10+1);
  return setHomeowner_info(prev=>({
    ...prev, encharge10:prev.encharge10+1}))
  }
  
  const encharge10_Decrement=()=>{
    if(homeowner_info.encharge10<1)
    {
      getCapacity(homeowner_info.encharge3,homeowner_info.encharge10);
     return setHomeowner_info(prev=>({
      ...prev, encharge10:0}))
    }
    else{
      getCapacity(homeowner_info.encharge3,homeowner_info.encharge10-1);
      return setHomeowner_info(prev=>({
        ...prev, encharge10:prev.encharge10-1}))
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };



  const onImageChange = (e) => {
    setImg(`${e.target.files[0].name}`);
    setUpload("RE-UPLOAD");
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "first_name":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperTextFirstName("");
        } else {
          setHelperTextFirstName(FIRSTNAME_ERROR);
        }
        break;
      case "last_name":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperLastName("");
        } else {
          setHelperLastName(LASTNAME_ERROR);
        }
        break;
      case "email_address":
        if (EMAIL_REGEX.test(value) && value.length > 0) {
          setHelperTextEmail("");
        } else {
          setHelperTextEmail(EMAIL_ERROR);
        }
        break;
      case "address1":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperTextAddress1("");
        } else {
          setHelperTextAddress1(ADDRESS1_ERROR);
        }
        break;
      case "address2":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperTextAddress2("");
        } else {
          setHelperTextAddress2(ADDRESS2_ERROR);
        }
        break;
      case "city":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperTextCity("");
        } else {
          setHelperTextCity(CITY);
        }
        break;
      case "state":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperTextState("");
        } else {
          setHelperTextState(STATE);
        }
        break;
      case "zip":
        if (NUMBER_REGEX.test(value) && value.length === 5) {
          setHelperTextZip("");
        } else {
          setHelperTextZip(ZIP);
        }
        break;
      case "phone":
        if (NUMBER_REGEX.test(value) && value.length === 10) {
          setHelperTextPN("");
        } else {
          setHelperTextPN(PHONENUMBER);
        }
        break;
      case "program_type":
        setHomeowner_info({ program_type: e.target.value });
        break;
      case "electric_account_number":
        if (NUMBER_REGEX.test(value) && value.length >= 8) {
          setHelperTextAC("");
        } else {
          setHelperTextAC(ELECTRIC);
        }
        break;
      default:
        break;
    }
    setHomeowner_info({ ...homeowner_info, [name]: value });
  };

  const disableButton = () => {
    const {
      first_name,
      last_name,
      email_address,
      zip,
      state,
      address1,
      address2,
      city,
      phone,
      encharge3,
      encharge10,
      electric_account_number,
      program_type,
    } = homeowner_info;
    if (
      first_name === "" ||
      last_name === "" ||
      zip === "" ||
      state === "" ||
      email_address === "" ||
      phone === "" ||
      electric_account_number === "" ||
      address1 === "" ||
      address2 === "" ||
      city === "" ||
      img === null ||
      encharge3 === 0 ||
      encharge10 === 0 ||
      program_type === "" ||
      checked === false
    ) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

 
  useEffect(() => {
    disableButton();
  });

 
  return (
    <>
      <Card className={classes.enterTheDetail}>
        <div className={classes.detailInformation}>
          <div>
            <Typography className={classes.topContents}>
              Enter the following Details
            </Typography>
            <Table>
              <TableContainer className={classes.tableContainer}>
                <TextField
                  className={classes.textField}
                  variant="standard"
                  label="Customer First Name"
                  value={homeowner_info.first_name}
                  name="first_name"
                  onChange={handleChange}
                  error={helperTextfirst_name === "" ? false : true}
                  helperText={helperTextfirst_name}
                  // InputLabelProps={{ className: classes.textfieldLabel }}
                  InputProps={{
                    classes: {
                      root: classes.root
                    }
                  }}
                />
                <br />
                <TextField
                  className={classes.textField}
                  label="Customer Last Name"
                  variant="standard"
                  value={homeowner_info.last_name}
                  name="last_name"
                  onChange={handleChange}
                  error={helperTextlastName === "" ? false : true}
                  helperText={helperTextlastName}
                />
                <TextField
                  className={classes.textField}
                  label="Email Address"
                  variant="standard"
                  value={homeowner_info.email_address}
                  name="email_address"
                  onChange={handleChange}
                  error={helperTextemail === "" ? false : true}
                  helperText={helperTextemail}
                />
                <TextField
                  className={classes.textField}
                  label="Address line 1 (Street address, etc"
                  variant="standard"
                  value={homeowner_info.address1}
                  name="address1"
                  onChange={handleChange}
                  error={helperTextaddress1 === "" ? false : true}
                  helperText={helperTextaddress1}
                />
                <TextField
                  className={classes.textField}
                  label="Address line 2 (Apartment, buidling, floor, etc ) (Optional)"
                  variant="standard"
                  value={homeowner_info.address2}
                  name="address2"
                  onChange={handleChange}
                  error={helperTextaddress2 === "" ? false : true}
                  helperText={helperTextaddress2}
                />
                <TextField
                  className={classes.textField}
                  label="City"
                  variant="standard"
                  value={homeowner_info.city}
                  name="city"
                  onChange={handleChange}
                  error={helperTextcity === "" ? false : true}
                  helperText={helperTextcity}
                />
                <TextField
                  className={classes.textField}
                  label="State"
                  variant="standard"
                  value={homeowner_info.state}
                  name="state"
                  onChange={handleChange}
                  error={helperTextstate === "" ? false : true}
                  helperText={helperTextstate}
                />
                <TextField
                  className={classes.textField}
                  label="Zip"
                  variant="standard"
                  value={homeowner_info.zip}
                  name="zip"
                  onChange={handleChange}
                  error={helperTextzip === "" ? false : true}
                  helperText={helperTextzip}
                />
                <TextField
                  className={classes.textField}
                  label="Phone Number"
                  variant="standard"
                  value={homeowner_info.phone}
                  name="phone"
                  onChange={handleChange}
                  error={helperTextpn === "" ? false : true}
                  helperText={helperTextpn}
                />
                <Typography className={classes.textFieldDetails}>
                  Battery Details
                </Typography>
                <div className={classes.textFieldEnphase}>
                  <span className={classes.enphaseField}>Enphase 3</span>
                  <div className={classes.enphaseBattery}>
                    {" "}
                    <Chip
                      id="1"
                      className={classes.decrementButton}
                      onClick={encharge3_Decrement}
                      label="-"
                      value={homeowner_info.encharge3}
                    />
                    {homeowner_info.encharge3}
                    <Chip
                      id="1"
                      value={count1}
                      className={classes.IncrementCount}
                      onClick={encharge3_Increment}
                      label="+"
                    />
                  </div>
                </div>
                <div className={classes.textFieldEnphase}>
                  <span className={classes.enphaseField}>Enphase 10</span>
                  <div className={classes.enphaseBattery}>
                    {" "}
                    <Chip
                      id="2"
                      className={classes.decrementButton}
                      onClick={encharge10_Decrement}
                      label="-"
                      value={homeowner_info.encharge10}
                    />
                   {homeowner_info.encharge10}
                    <Chip
                      id="2"
                      className={classes.IncrementCount}
                      onClick={encharge10_Increment}
                      label="+"
                    />
                  </div>
                </div>
                <Typography  className={classes.textFieldDetails}>
                  {" "}
                  KW Capacity committed for data sharing
                </Typography>
                <Typography className={classes.enphaseField} >  
                {homeowner_info.kw_capacity_committed}
                </Typography>

                <FormControl className={classes.textField} variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Program Option
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={homeowner_info.program_type}
                    onChange={handleChange}
                    label="Program Option"
                    name="program_type"
                  >
                    {values.map((ele) => (
                      <MenuItem key={ele.value} value={ele.label}>
                        {ele.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  className={classes.textField}
                  label="Electric Account Number"
                  variant="standard"
                  value={homeowner_info.electric_account_number}
                  name="electric_account_number"
                  onChange={handleChange}
                  error={helperTextac === "" ? false : true}
                  helperText={helperTextac}
                />
              </TableContainer>
            </Table>
          </div>

          <div className={classes.uploadingFile}>
            <Typography className={classes.fileuploaderContent}>
              Files to be uploaded
            </Typography>
            <Card className={classes.uploadFile}>
              <CardContent className={classes.fileCardContent}>
                <img className={classes.UpArrow} src={UpArrow} />
                <Typography className={classes.scannedCopy}>
                  Scanned Copy of Program T&C Document
                </Typography>
                <h4 className="fileUploader">
                  {upload}
                  <input
                    type="file"
                    className="hide_file"
                    accept="application/pdf"
                    onChange={onImageChange}
                  />
                </h4>
                <span className="selectedFile">{img}</span>
                <Typography className={classes.fileConditions}>
                  File number limit: 1
                </Typography>
                <Typography className={classes.fileConditions}>
                  Size limit:10GB
                </Typography>
                <Typography className={classes.fileConditions}>
                  Allowed file types:PDF
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <Checkbox checked={checked} setChecked={setChecked} />
      </Card>

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
          disabled={isEnabled}
        >
          Submit
        </Button>
        <DialogConfirm setOpen={setOpen} open={open} homeowner_info={homeowner_info} />      
        </div>
    </>
  );
}

export default Index;
