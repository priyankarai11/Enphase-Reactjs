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
  ZIPPED
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
  const [filename, setFileName] = useState(null);
  const [optionType,setOptionType]=useState("")
  let [input, setInput] = useState({
    homeowner_info: {  first_name: "",
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
    program_type:"",
    electric_account_number: "",
    kw_capacity_committed: 0.00
    },
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
    return setInput(prev => ({
      ...prev,
      homeowner_info: { ...prev.homeowner_info, kw_capacity_committed:getCapacities  }
    }))
  }

  const encharge3_Increment = () => {
    getCapacity(input.homeowner_info.encharge3+1,input.homeowner_info.encharge10);
    return setInput(prev => ({
      ...prev,
      homeowner_info: { ...prev.homeowner_info, encharge3: prev.homeowner_info.encharge3 + 1 }
    }))
}


const encharge3_Decrement=()=>{
  if (input.homeowner_info.encharge3 < 1) {
    getCapacity(input.homeowner_info.encharge3, input.homeowner_info.encharge10);
    return setInput(prev => ({
      ...prev,
      homeowner_info: { ...prev.homeowner_info, encharge3: 0 }
    }))
  }
  else {
    getCapacity(input.homeowner_info.encharge3 - 1, input.homeowner_info.encharge10);
    return setInput(prev => ({
      ...prev,
      homeowner_info: { ...prev.homeowner_info, encharge3: prev.homeowner_info.encharge3 - 1 }
    }))
  }
}

const encharge10_Increment=()=>{
  getCapacity(input.homeowner_info.encharge3,input.homeowner_info.encharge10+1);
  return setInput(prev => ({
    ...prev,
    homeowner_info: { ...prev.homeowner_info, encharge10: prev.homeowner_info.encharge10 + 1 }
  }))
  }
  
  const encharge10_Decrement=()=>{
    if(input.homeowner_info.encharge10<1)
    {
      getCapacity(input.homeowner_info.encharge3,input.homeowner_info.encharge10);
      return setInput(prev => ({
        ...prev,
        homeowner_info: { ...prev.homeowner_info, encharge10: 0 }
      }))
    }
    else{
      getCapacity(input.homeowner_info.encharge3,input.homeowner_info.encharge10-1);
      return setInput(prev => ({
        ...prev,
        homeowner_info: { ...prev.homeowner_info, encharge10: prev.homeowner_info.encharge10 - 1 }
      }))
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };



  const onImageChange = (e) => {
    setImg(e.target.files[0]);
    setFileName(`${e.target.files[0].name}`);
    setUpload("RE-UPLOAD");
  };
  
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "first_name":
        if (STRING_REGEX.test(value) && value.length >= 2) {
          setHelperTextFirstName("");
        } else {
          setHelperTextFirstName(FIRSTNAME_ERROR);
        }
        break;
      case "last_name":
        if (STRING_REGEX.test(value) && value.length >= 2) {
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
        if (STRING_REGEX.test(value) && value.length >= 2) {
          setHelperTextAddress1("");
        } else {
          setHelperTextAddress1(ADDRESS1_ERROR);
        }
        break;
      case "address2":
        if (STRING_REGEX.test(value) && value.length >= 2) {
          setHelperTextAddress2("");
        } else {
          setHelperTextAddress2(ADDRESS2_ERROR);
        }
        break;
      case "city":
        if (STRING_REGEX.test(value) && value.length >= 2) {
          setHelperTextCity("");
        } else {
          setHelperTextCity(CITY);
        }
        break;
      case "state":
        if (STRING_REGEX.test(value) && value.length >= 2) {
          setHelperTextState("");
        } else {
          setHelperTextState(STATE);
        }
        break;
      case "zip":
        if (NUMBER_REGEX.test(value) && value.length === 5) {
          setHelperTextZip("");
        } else {
          if (value.length === 0)
          {
             setHelperTextZip(ZIP);
          }
          else {
             setHelperTextZip(ZIPPED);
          }
         
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
        setOptionType(e.target.value)
        if (e.target.value === "Data Only") {
          return setInput((prev) => ({
            ...prev,
            homeowner_info: {
              ...prev.homeowner_info,
              program_type: "DATA_ONLY",
            },
          }));
        }
        else {
          return setInput((prev) => ({
            ...prev,
            homeowner_info: {
              ...prev.homeowner_info,
              program_type: "DATA_AND_DISPATCH",
            },
          }));}
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
    setInput({...input,homeowner_info:{...input.homeowner_info,[name]:value}})
  };

  const disableButton = () => {
    let {
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
    } = input.homeowner_info;
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
                  value={input.first_name}
                  name="first_name"
                  onChange={handleChange}
                  error={helperTextfirst_name === "" ? false : true}
                  helperText={helperTextfirst_name}
                  // InputLabelProps={{ className: classes.textfieldLabel }}
                  InputProps={{
                    classes: {
                      root: classes.root,
                    },
                  }}
                />
                <br />
                <TextField
                  className={classes.textField}
                  label="Customer Last Name"
                  variant="standard"
                  value={input.last_name}
                  name="last_name"
                  onChange={handleChange}
                  error={helperTextlastName === "" ? false : true}
                  helperText={helperTextlastName}
                />
                <TextField
                  className={classes.textField}
                  label="Email Address"
                  variant="standard"
                  value={input.email_address}
                  name="email_address"
                  onChange={handleChange}
                  error={helperTextemail === "" ? false : true}
                  helperText={helperTextemail}
                />
                <TextField
                  className={classes.textField}
                  label="Address line 1 (Street address, etc"
                  variant="standard"
                  value={input.address1}
                  name="address1"
                  onChange={handleChange}
                  error={helperTextaddress1 === "" ? false : true}
                  helperText={helperTextaddress1}
                />
                <TextField
                  className={classes.textField}
                  label="Address line 2 (Apartment, buidling, floor, etc ) (Optional)"
                  variant="standard"
                  value={input.address2}
                  name="address2"
                  onChange={handleChange}
                  error={helperTextaddress2 === "" ? false : true}
                  helperText={helperTextaddress2}
                />
                <TextField
                  className={classes.textField}
                  label="City"
                  variant="standard"
                  value={input.city}
                  name="city"
                  onChange={handleChange}
                  error={helperTextcity === "" ? false : true}
                  helperText={helperTextcity}
                />
                <TextField
                  className={classes.textField}
                  label="State"
                  variant="standard"
                  value={input.state}
                  name="state"
                  onChange={handleChange}
                  error={helperTextstate === "" ? false : true}
                  helperText={helperTextstate}
                />
                <TextField
                  className={classes.textField}
                  label="Zip"
                  variant="standard"
                  value={input.zip}
                  name="zip"
                  onChange={handleChange}
                  error={helperTextzip === "" ? false : true}
                  helperText={helperTextzip}
                />
                <TextField
                  className={classes.textField}
                  label="Phone Number"
                  variant="standard"
                  value={input.phone}
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
                      className={classes.decrementButton}
                      onClick={encharge3_Decrement}
                      label="-"
                      value={input.homeowner_info.encharge3}
                    />
                    {input.homeowner_info.encharge3}
                    <Chip
                      value={input.homeowner_info.encharge3}
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
                      className={classes.decrementButton}
                      onClick={encharge10_Decrement}
                      label="-"
                      value={input.homeowner_info.encharge10}
                    />
                    {input.homeowner_info.encharge10}
                    <Chip
                      className={classes.IncrementCount}
                      onClick={encharge10_Increment}
                      label="+"
                      value={input.homeowner_info.encharge10}
                    />
                  </div>
                </div>
                <Typography className={classes.textFieldDetails}>
                  {" "}
                  KW Capacity committed for data sharing
                </Typography>
                <Typography className={classes.enphaseField}>
                  {input.homeowner_info.kw_capacity_committed}
                </Typography>

                <FormControl className={classes.textField} variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Program Option
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={optionType}
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
                  value={input.electric_account_number}
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
                    id="fileInput"
                    type="file"
                    className="hide_file"
                    accept="application/pdf"
                    onChange={onImageChange}
                  />
                </h4>
                <span className="selectedFile">{filename}</span>
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
        <DialogConfirm setOpen={setOpen} open={open} input={input} img={img} />
      </div>
    </>
  );
}

export default Index;
