import React from "react";
import "./index.css";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    marginLeft: 20,
  },
  table: {
    minWidth: 100,
  },
  arrow: {
    color: "orange",
  },
});

const applicationTrack = () => {
  window.location.href = "/application-tracker";
};

function Home() {
  const classes = useStyles();
  let name = sessionStorage.getItem("user_name");
  let company = sessionStorage.getItem("account_company_name");
  let time = sessionStorage.getItem("account_time_zone");
  // let role = sessionStorage.getItem("roles");
  return (
    <>
      <div className="centered">
        <img src={Logo} className="logo" />
        <label className="profileName">Hi {name}</label>
        <img className="profile_img" src={Profile} />

        <h3 className="Grid">Grid Services-Installer Intake Portal</h3>
      </div>

      <div className="dashboardPage">
        <h1 className="welcome" id="welcome">
          Welcome {name}
          {" !"}
        </h1>
        <br></br>
        <br></br>
        <span>Choose a program to track or submit homeowner applications.</span>
        <div className="cardview">
          <div className="card-view">
            <Card className={classes.root} onClick={applicationTrack}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  APS Residential Battery Program{" "}
                  <KeyboardArrowRightIcon className={classes.arrow} />
                </Typography>

                {/* <br /> */}
                <hr />
                <Table className={classes.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Utility
                      </TableCell>
                      <TableCell align="right">
                        <strong>{company}</strong>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        State
                      </TableCell>
                      <TableCell align="right">
                        {" "}
                        <strong>{time}</strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="card-view">
            <Card className={classes.root} onClick={applicationTrack}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  HECO SDP Battery Bonus Program
                  <KeyboardArrowRightIcon className={classes.arrow} />
                </Typography>
                <br />
                <hr />
                <Table className={classes.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Utility
                      </TableCell>
                      <TableCell align="right">
                        <strong>{company}</strong>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        State
                      </TableCell>
                      <TableCell align="right">
                        {" "}
                        <strong>{time}</strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
