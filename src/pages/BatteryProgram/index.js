import React, { useState } from "react";
import "./style";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import { Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { FaSlidersH } from "react-icons/fa";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import ApplicationformTable from "../../components/ApplicationformTable/index";
import { Breadcrumbs } from "@material-ui/core";

function createData(id, siteId, ownerName, installerName, status) {
  return { id, siteId, ownerName, installerName, status };
}

function Index() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  const classes = useStyles();
  let name = sessionStorage.getItem("user_name");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = [
    createData(
      <a href="/application-Id-tracker"> 32342</a>,
      "---",
      "Miller Vivian",
      "Buckridge Stuart",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "yellow" }}
          ></div>
        }
        label="Submitted by APS Review"
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <a href="/application-Id-tracker">34334</a>,
      <Link>Enter Enphase Site ID &#62; </Link>,
      "Bernier Zachary",
      "Von Ronaldo",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "#b2ff59" }}
          ></div>
        }
        label={<div className={classes.labelStyle}>Approved by APS</div>}
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <a href="/application-Id-tracker">23434</a>,
      "---",
      "Murray Alfredo",
      "Kub Darwin",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "red" }}
          ></div>
        }
        label={<div className={classes.labelStyle}>Rejected by APS</div>}
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <a href="/application-Id-tracker">23434</a>,
      "32123",
      "Schinner Leone",
      "Grant Samir",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "yellow" }}
          ></div>
        }
        label="Submitted for Enphase Review"
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <Link>24334</Link>,
      "32123",
      "Osinski Elwyn",
      "Padberg Lacey",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "#b2ff59" }}
          ></div>
        }
        label={<div className={classes.labelStyle}>Approved by Enphase</div>}
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <Link>34234</Link>,
      <Link>Enter Enphase Site ID &#62; </Link>,
      "Abernathy Mckenzie",
      "Turcotte Josie",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "#b2ff59" }}
          ></div>
        }
        label={<div className={classes.labelStyle}>Approved by APS</div>}
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <Link>34323</Link>,
      "32123",
      "Klocko Albertha",
      "Tromp Audie",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "red" }}
          ></div>
        }
        label={<div className={classes.labelStyle}>Rejected by Enphase</div>}
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <Link>32322</Link>,
      "---",
      "Terry Ericka",
      "Boyer Sammie",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "yellow" }}
          ></div>
        }
        label="Submitted for APS review"
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <Link>32432</Link>,
      <Link>Enter Enphase Site ID &#62; </Link>,
      "Roob Leland",
      "Heidenreich Eldora",
      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "#b2ff59" }}
          ></div>
        }
        label={<div className={classes.labelStyle}>Approved by Enphase</div>}
        size="small"
        variant="outlined"
      />
    ),
    createData(
      <Link>32123</Link>,
      "32123",
      "Jerde Frederic",
      "Reichel Kim",

      <Chip
        avatar={
          <div
            className={classes.roundIcon}
            style={{ background: "yellow" }}
          ></div>
        }
        label="Submitted for Enphase review"
        size="small"
        variant="outlined"
      />
    ),
  ];

  const columns = [
    {
      id: "id",
      label: "APPICATION ID",
      // render: (rowData) => (
      //   <Link href={`${rowData.id}`} target="_blank">

      // {rowData.id}
      //   </Link>

      // ),
    },
    { id: "siteId", label: "ENPHASE SITE ID", minWidth: 100 },
    {
      id: "ownerName",
      label: "HOME OWNER FULL NAME",
    },
    {
      id: "installerName",
      label: "INSTALLER NAME",
    },
    {
      id: "status",
      label: (
        <div>
          APPLICATION TRACKER{" "}
          <FaSlidersH
            onClick={handleClick}
            id="demo-positioned-menu"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="centered">
        <img src={Logo} className="logo" />
        <label className="profileName">Hi {name}</label>
        <img className="profile_img" src={Profile} />

        <h3 className="Grid">Grid Services-Installer Intake Portal</h3>
      </div>
      <Breadcrumbs
        className={classes.dashboardTracker}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="inherit" href="/">
          Dashboard
        </Link>
        <Typography className={classes.batteryTracker}>
          APS Residential Battery Program
        </Typography>
      </Breadcrumbs>
      <Typography
        className={classes.applicationTracker}
        variant="h5"
        component="h2"
      >
        Applications Tracker
      </Typography>
      <Typography className={classes.buttonForm}>
        <Button variant="outlined" className={classes.appProcess}>
          SEE HOW APPLICATION PROCESS WORKS
        </Button>
        <Button variant="outlined" className={classes.newApplication}>
          SUBMIT NEW APPLICATION
        </Button>
      </Typography>

      <Menu
        className={classes.menuList}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>Submitted for APS Review</MenuItem>
        <MenuItem onClick={handleClose}>Approved by APS</MenuItem>
        <MenuItem onClick={handleClose}>Rejected by APS</MenuItem>
        <MenuItem onClick={handleClose}>Submitted for Enphase Review</MenuItem>
        <MenuItem onClick={handleClose}>Approved by Enphase</MenuItem>
        <MenuItem onClick={handleClose}>Rejected by Enphase</MenuItem>
      </Menu>

      <ApplicationformTable
        columns={columns}
        rows={rows}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
}

export default Index;
