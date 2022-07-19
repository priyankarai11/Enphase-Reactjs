/** @format */

import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { CardContent, Button } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { ListItem, Typography, Link } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Table, TableContainer } from "@mui/material";
import { useNavigate } from "react-router";
import { fileUpload } from "./constant";
import DialogConfirm from "../../components/DialogBox/DialogAlert/reward";
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
  METER,
  SITE_ID,
  ZIPPED,
  CAPACITY,
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
  const [csvFile, setcsvFile] = useState(null);
  const [pdfFileOne, setpdfFileOne] = useState(null);
  const [pdfFileTwo, setpdfFileTwo] = useState(null);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
    const [upload, setUpload] = useState("UPLOAD");
    const [upload2, setUpload2] = useState("UPLOAD");
    const [upload3, setUpload3] = useState("UPLOAD");
  const [count1, setCount1] = useState(0);
const [helperTextsite, setHelperTextSite] = useState("");
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
    const [helperTextmeter, setHelperTextMeter] = useState("");
const [helperTextcapacity, setHelperTextCapacity] = useState("");
    const [filename, setFileName] = useState(null);
    const [filename2, setFileName2] = useState(null);
    const [filename3, setFileName3] = useState(null);
  let [homeowner_info, sethomeowner_info] = useState({
      0: "w",
      1: "w",
      2: "r",
      3: "e",
      site_id: "",
      first_name: "",
      last_name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      email_address: "",
      phone: "",
      kw_capacity_committed: "",
      electric_account_number: "",
      utility_meter_number: "",
      program_type: "DISPATCH",
      enrollment_form: {},
      signed_form1: {},
      tandc_form: {},
      accept: true,
  });

  const handleBack = () => {
    navigate(`/aps-application-tracker/${PERSON_ID}/${CARD_NAME}`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onImageChange = (e) => {
    setcsvFile(e.target.files[0]);
    setFileName(`${e.target.files[0].name}`);
    setUpload("RE-UPLOAD");
    };
    
     const onImageChange2 = (e) => {
       setpdfFileOne(e.target.files[0]);
       setFileName2(`${e.target.files[0].name}`);
       setUpload2("RE-UPLOAD");
    };
    
     const onImageChange3 = (e) => {
       setpdfFileTwo(e.target.files[0]);
       setFileName3(`${e.target.files[0].name}`);
       setUpload3("RE-UPLOAD");
     };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
      switch (name) {
        case "site_id":
          if (NUMBER_REGEX.test(value) && value.length < 10) {
            setHelperTextSite("");
          } else {
            setHelperTextSite(SITE_ID);
          }
          break;
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
        case "kw_capacity_committed":
          if (NUMBER_REGEX.test(value) && value.length < 2) {
            setHelperTextCapacity("");
          } else {
            setHelperTextCapacity(CAPACITY);
          }
          break;
        case "zip":
          if (NUMBER_REGEX.test(value) && value.length === 5) {
            setHelperTextZip("");
          } else {
            if (value.length === 0) {
              setHelperTextZip(ZIP);
            } else setHelperTextZip(ZIPPED);
          }
          break;
        case "phone":
          if (NUMBER_REGEX.test(value) && value.length === 10) {
            setHelperTextPN("");
          } else {
            setHelperTextPN(PHONENUMBER);
          }
          break;
        case "electric_account_number":
          if (NUMBER_REGEX.test(value) && value.length <= 12) {
            setHelperTextAC("");
          } else {
            setHelperTextAC(ELECTRIC);
          }
          break;
        case "utility_meter_number":
          if (NUMBER_REGEX.test(value) && value.length <= 12) {
            setHelperTextAC("");
          } else {
            setHelperTextAC(METER);
          }
          break;
        default:
          break;
    }
      sethomeowner_info({ ...homeowner_info, [name]: value });
  };

  const disableButton = () => {
    let {
       site_id,
      first_name,
      last_name,
      email_address,
      zip,
      state,
      address1,
      address2,
      city,
      phone,
      electric_account_number,
      kw_capacity_committed,
      utility_meter_number,
    } = homeowner_info;
    if (
      site_id=== "" ||
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
      csvFile === null ||
      pdfFileOne === null ||
      pdfFileTwo === null ||
      kw_capacity_committed === "" ||
      utility_meter_number===""||
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
                  label="Enphase Site ID"
                  variant="standard"
                  value={homeowner_info.site_id}
                  name="site_id"
                  onChange={handleChange}
                  error={helperTextsite === "" ? false : true}
                  helperText={helperTextsite}
                />
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
                      root: classes.root,
                    },
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
                  label="Address line 1"
                  variant="standard"
                  value={homeowner_info.address1}
                  name="address1"
                  onChange={handleChange}
                  error={helperTextaddress1 === "" ? false : true}
                  helperText={helperTextaddress1}
                />
                <TextField
                  className={classes.textField}
                  label="Address line 2"
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
                  label="Primary Email Address"
                  variant="standard"
                  value={homeowner_info.email_address}
                  name="email_address"
                  onChange={handleChange}
                  error={helperTextemail === "" ? false : true}
                  helperText={helperTextemail}
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
                <TextField
                  className={classes.textField}
                  label="DLRP Contracted Amount(kW)"
                  variant="standard"
                  value={homeowner_info.kw_capacity_committed}
                  name="kw_capacity_committed"
                  onChange={handleChange}
                  error={helperTextcapacity === "" ? false : true}
                  helperText={helperTextcapacity}
                />
                <TextField
                  className={classes.textField}
                  label="PSEG Long Island Account Number"
                  variant="standard"
                  value={homeowner_info.electric_account_number}
                  name="electric_account_number"
                  onChange={handleChange}
                  error={helperTextac === "" ? false : true}
                  helperText={helperTextac}
                />
                <TextField
                  className={classes.textField}
                  label="PSEG Long Island Electric Meter Number"
                  variant="standard"
                  value={homeowner_info.utility_meter_number}
                  name="utility_meter_number"
                  onChange={handleChange}
                  error={helperTextmeter === "" ? false : true}
                  helperText={helperTextmeter}
                />
              </TableContainer>
            </Table>
          </div>
          <div>
            <Card>
              <div className={classes.uploadingFile}>
                <Typography className={classes.fileuploaderContent}>
                  Files to be uploaded
                </Typography>
                <div className={classes.fileContent}>
                  <Card className={classes.uploadFile}>
                    <CardContent className={classes.fileCardContent}>
                      <img className={classes.UpArrow} src={UpArrow} />
                      <Typography className={classes.scannedCopy}>
                        PSEG Enrollment Form
                      </Typography>
                      <h4 className="fileUploader">
                        {upload}
                        <input
                          id="fileInput"
                          type="file"
                          className="hide_file"
                          accept="text/csv"
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
                        Allowed file types:CSV
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.uploadFile}>
                    <CardContent className={classes.fileCardContent}>
                      <img className={classes.UpArrow} src={UpArrow} />
                      <Typography className={classes.scannedCopy}>
                        NYSERDA Customer Attestation Form
                      </Typography>
                      <h4 className="fileUploader">
                        {upload2}
                        <input
                          id="fileInput"
                          type="file"
                          className="hide_file"
                          accept="application/pdf"
                          onChange={onImageChange2}
                        />
                      </h4>
                      <span className="selectedFile">{filename2}</span>
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
                  <Card className={classes.uploadFile}>
                    <CardContent className={classes.fileCardContent}>
                      <img className={classes.UpArrow} src={UpArrow} />
                      <Typography className={classes.scannedCopy}>
                        Scanned Copy of Enphase Terms and Conditions Document
                      </Typography>
                      <h4 className="fileUploader">
                        {upload3}
                        <input
                          id="fileInput"
                          type="file"
                          className="hide_file"
                          accept="application/pdf"
                          onChange={onImageChange3}
                        />
                      </h4>
                      <span className="selectedFile">{filename3}</span>
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
        <DialogConfirm
          setOpen={setOpen}
          open={open}
          homeowner_info={homeowner_info}
          csvFile={csvFile}
          pdfFileOne={pdfFileOne}
          pdfFileTwo={pdfFileTwo}
        />
      </div>
    </>
  );
}

export default Index;

// source_portal: "INTAKE",
//     program_id: PERSON_ID,
//     site_id: "",