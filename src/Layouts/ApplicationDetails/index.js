import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { CardContent, Button } from "@mui/material";
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
  let count = {
    1: 0,
    2: 0,
  };

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [upload, setUpload] = useState("UPLOAD");
  const [counter, setCounter] = useState(count);
  const [helperTextemail, setHelperTextEmail] = useState("");
  const [helperTextfirstName, setHelperTextFirstName] = useState("");
  const [helperTextlastName, setHelperLastName] = useState("");
  const [helperTextaddress1, setHelperTextAddress1] = useState("");
  const [helperTextaddress2, setHelperTextAddress2] = useState("");
  const [helperTextcity, setHelperTextCity] = useState("");
  const [helperTextzip, setHelperTextZip] = useState("");
  const [helperTextstate, setHelperTextState] = useState("");
  const [helperTextpn, setHelperTextPN] = useState("");
  const [helperTextac, setHelperTextAC] = useState("");
  const [input, setInput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    accountNumner: "",
    option: "",
    electric: "",
  });

  const num = counter[1] * 1.28 + counter[2] * 3.84;
  const getCapacity = (Math.round(num * 100) / 100).toFixed(2);

  const handleBack = () => {
    navigate(`/aps-application-tracker/${PERSON_ID}/${CARD_NAME}`);
  };

  const increment = (id) => {
    setCounter({ ...counter, [id]: counter[id] + 1 });
  };

  const decrement = (id) => {
    if (counter[id] < 1) {
      setCounter[id] = 0;
    } else {
      setCounter({ ...counter, [id]: counter[id] - 1 });
    }
  };

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
      case "firstName":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperTextFirstName("");
        } else {
          setHelperTextFirstName(FIRSTNAME_ERROR);
        }
        break;
      case "lastName":
        if (STRING_REGEX.test(value) && value.length >= 4) {
          setHelperLastName("");
        } else {
          setHelperLastName(LASTNAME_ERROR);
        }
        break;
      case "email":
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
      case "option":
        setInput({ option: e.target.value });
        break;
      case "electric":
        if (NUMBER_REGEX.test(value) && value.length >= 8) {
          setHelperTextAC("");
        } else {
          setHelperTextAC(ELECTRIC);
        }
        break;
      default:
        break;
    }
    setInput({ ...input, [name]: value });
    // console.log({ ...input, [name]: value });
  };
  // console.log(counter[1], counter[2], img);

  const disableButton = () => {
    const {
      firstName,
      lastName,
      email,
      zip,
      state,
      address1,
      address2,
      city,
      phone,
      electric,
    } = input;
    if (
      firstName === "" ||
      lastName === "" ||
      zip === "" ||
      state === "" ||
      email === "" ||
      phone === "" ||
      electric === "" ||
      address1 === "" ||
      address2 === "" ||
      city === "" ||
      img === null ||
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
  console.log(checked);
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
                  value={input.firstName}
                  name="firstName"
                  onChange={handleChange}
                  error={helperTextfirstName === "" ? false : true}
                  helperText={helperTextfirstName}
                  InputLabelProps={{ className: classes.textfieldLabel }}
                />
                <br />
                <TextField
                  className={classes.textField}
                  label="Customer Last Name"
                  variant="standard"
                  value={input.lastName}
                  name="lastName"
                  onChange={handleChange}
                  error={helperTextlastName === "" ? false : true}
                  helperText={helperTextlastName}
                />
                <TextField
                  className={classes.textField}
                  label="Email Address"
                  variant="standard"
                  value={input.email}
                  name="email"
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
                      id="1"
                      className={classes.decrementButton}
                      onClick={() => {
                        decrement(1);
                      }}
                      label="-"
                      value={counter}
                    />
                    {counter[1]}
                    <Chip
                      id="1"
                      className={classes.IncrementCount}
                      onClick={() => {
                        increment(1);
                      }}
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
                      onClick={() => {
                        decrement(2);
                      }}
                      label="-"
                      value={counter}
                    />
                    {counter[2]}
                    <Chip
                      id="2"
                      className={classes.IncrementCount}
                      onClick={() => {
                        increment(2);
                      }}
                      label="+"
                    />
                  </div>
                </div>
                <Typography className={classes.textFieldDetails}>
                  {" "}
                  KW Capacity committed for data sharing
                </Typography>

                <ListItem className={classes.enphaseField}>
                  {getCapacity}
                </ListItem>
                <TextField
                  className={classes.textField}
                  select
                  label="Program Option"
                  value={input.option}
                  name="option"
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                >
                  {values.map((ele) => (
                    <option key={ele.value} value={ele.label}>
                      {ele.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  className={classes.textField}
                  label="Electric Account Number"
                  variant="standard"
                  value={input.electric}
                  name="electric"
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
        {/* <div className={classes.checkbox}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onClick={() => setChecked(!checked)} />}
              label={
                <Typography className={classes.formControlLabel}>
                  I confirm the following:
                </Typography>
              }
            />
          </FormGroup>
        </div>

        <div>
          <ul className={classes.listStyle}>
            <li className={classes.listItems}>
              I am authorised to submit the documents that I have uploaded using
              this site, and have received permission from the applicant to
              submit this information to Enphase on the applicant’s behalf.
            </li>
            <li className={classes.listItems}>
              I have read and understand{" "}
              <Link className={classes.linkRoot}>Enphase’s Privacy Policy</Link>{" "}
              and <Link className={classes.linkRoot}> Terms of Service </Link>
              (the “Policies”).
            </li>
            <li className={classes.listItems}>
              The applicant has acknowledged that they have read and understand
              the Policies.
            </li>
          </ul>
        </div> */}
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
          // disabled={isEnabled}
        >
          Submit
        </Button>
        <DialogConfirm setOpen={setOpen} open={open} />
      </div>
    </>
  );
}

export default Index;
