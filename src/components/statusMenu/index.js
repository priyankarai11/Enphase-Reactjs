import React, {useState} from 'react'
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import Application from "../../pages/BatteryProgram/index";
  
function Index() {
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
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>Submitted for APS Review</MenuItem>
        <MenuItem onClick={handleClose}>Approved by APS</MenuItem>
        <MenuItem onClick={handleClose}>Rejected by APS</MenuItem>
        <MenuItem onClick={handleClose}>Submitted for Enphase Review</MenuItem>
        <MenuItem onClick={handleClose}>Approved by Enphase</MenuItem>
        <MenuItem onClick={handleClose}>Rejected by Enphase</MenuItem>
      </Menu>
      <Application handleClick={handleClick} open={open}/>
    </>
  );
}


export default Index