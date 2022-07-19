import React, { useState } from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { NAME, NAME1 } from "../sessionStorage/index";
import { useStyles } from "./style";

function ProfileHead({ anchorEl, handleClick, open,setAnchorEl }) {
  const navigate = useNavigate();
  const classes = useStyles();

  const goBacktoSignIn = () => {
    navigate("/");
    localStorage.clear();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  return (
    <>
      <KeyboardArrowDown
        className="arrowMark"
        onClick={handleClick}
        id="menu"
      />

      <Menu
        className={classes.menu}
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "left",
        // }}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "left",

        //}}
      >
        <Mobile>
          <span className="user_name" onClick={handleClick}>
            Hi {NAME} {NAME1}
          </span>
        </Mobile>

        <MenuItem
          // classes={{ focusVisible: classes.focus }}
          className={classes.contact}
          onClick={() => (window.location = "mailto:yourmail@domain.com")}
        >
          Contact Support
        </MenuItem>
        <MenuItem className={classes.logOut} onClick={goBacktoSignIn}>
          Log Out
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileHead;
