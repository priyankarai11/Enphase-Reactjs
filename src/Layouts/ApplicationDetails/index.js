import React, { useState } from "react";
import { Card } from "@mui/material";
import { CardContent, Button } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Chip, InputAdornment } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Table, TableContainer } from "@mui/material";
import Checkbox from "../../components/Checkbox/index";
import UpArrow from "../../assets/icons/upArrow.svg";
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

  const [counter, setCounter] = useState(count);
  const [option, setOption] = useState("Data and Dispatch");

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

  const handleChange = (e) => {
    setOption(e.target.value);
  };

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
                />
                <br />
                <TextField
                  className={classes.textField}
                  label="Customer Last Name"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  label="Address line 1"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  label="Address line 2"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  label="City"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  label="State"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  label="Zip"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  label="Phone Number"
                  variant="standard"
                />
                <Typography className={classes.textField}>
                  Battery Details
                </Typography>

                <TextField
                  className={classes.textField}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Chip
                          id="1"
                          className={classes.decrementButton}
                          onClick={() => {
                            decrement(1);
                          }}
                          label="-"
                        />

                        <Typography className={classes.countNumber}>
                          {counter[1]}
                        </Typography>

                        <Chip
                          id="1"
                          className={classes.IncrementCount}
                          onClick={() => {
                            increment(1);
                          }}
                          label="+"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Chip
                          id="2"
                          className={classes.decrementButton}
                          onClick={() => {
                            decrement(2);
                          }}
                          label="-"
                        />

                        <Typography className={classes.countNumber}>
                          {counter[2]}
                        </Typography>

                        <Chip
                          id="2"
                          className={classes.IncrementCount}
                          onClick={() => {
                            increment(2);
                          }}
                          label="+"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* <Typography className={classes.textField}></Typography> */}
                <TextField
                  className={classes.textField}
                  label="  KW Capacity committed for data sharing"
                  variant="standard"
                />
                <TextField
                  className={classes.textField}
                  select
                  label="Program Option"
                  value={option}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                >
                  {values.map((ele) => (
                    <option key={ele.value} value={ele.value}>
                      {ele.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  className={classes.textField}
                  label="Electric Account Number"
                  variant="standard"
                />
                <Checkbox />
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
                <Button variant="outlined" className={classes.upload}>
                  Upload
                </Button>
                <Typography className={classes.fileConditions}>
                  File number limit: 1
                </Typography>
                <Typography className={classes.fileConditions}>
                  Size limit:10GB
                </Typography>
                <Typography className={classes.fileConditions}>
                  Download Application Form
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <Checkbox />
      </Card>
    </>
  );
}

export default Index;
