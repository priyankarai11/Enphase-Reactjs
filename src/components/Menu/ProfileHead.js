import React, { useState } from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function ProfileHead() {
  const navigate = useNavigate();

  const goBacktoSignIn = () => {
    navigate("/");
    sessionStorage.clear();
  };
  let name = sessionStorage.getItem("user_name");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <KeyboardArrowDown
        className="arrowMark"
        onClick={handleClick}
        id="menu"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />

      <Menu
        id="menu"
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
        <MenuItem onClick={handleClose}>{name}</MenuItem>
        <MenuItem>
          <Button onClick={goBacktoSignIn}>Log Out</Button>
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileHead;
