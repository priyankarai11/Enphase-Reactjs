import React, { useState } from "react";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import ApplicationformTable from "../../Layouts/ApplicationformTable";
import ProfileHead from "../Menu/ProfileHead";

function MenuItemList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected]=useState("")
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setSelected(e.target.innerText)
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
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
        {/* {inputData.map(ele=>
        <MenuItem>{ele.status}</MenuItem>
        )} */}
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>Application_Submitted</MenuItem>
        <MenuItem onClick={handleClose}>Application_Approved</MenuItem>
        <MenuItem onClick={handleClose}>Application_Rejected</MenuItem>
       <MenuItem onClick={handleClose}>Site_Rejected</MenuItem>
        <MenuItem onClick={handleClose}>Site_Submitted</MenuItem>
      </Menu>
      <ApplicationformTable open={open} handleClick={handleClick} selected={selected} />
      <ProfileHead
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  );
}

export default MenuItemList;
