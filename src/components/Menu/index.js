import React, { useState } from "react";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import ApplicationformTable from "../../Layouts/ApplicationformTable";
import RewardProgram from "../../pages/RewardProgram";
import ProfileHead from "../Menu/ProfileHead";

function MenuItemList({name}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("")
    const [anchorEll, setAnchorEll] = useState(null);
    const [select, setSelect] = useState("");
  const open = Boolean(anchorEl);
  const opened=Boolean(anchorEll)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setSelected(e.target.innerText)
    setAnchorEl(null);
  };

   const handleClicked = (e) => {
     setAnchorEll(e.currentTarget);
  };

        //   case "Site_Approved":
        //     return "Approved by PSEG";
        //   case "Application_Rejected":
        //     return "Rejected by Enphase";
        // }
  const handleClosed = (e) => {
    switch (e.target.innerText)
    {
      case "All": setSelect("All");
        break;
      case "Submitted for Enphase Review": setSelect("Application_Submitted");
          break;
      case "Submitted for PSEG Review": setSelect("Application_Approved");
          break;
      case "Rejected by PSEG": setSelect("Site_Rejected");
          break;
      case "Approved by PSEG": setSelect("Site_Approved");
          break;
      case "Rejected by Enphase": setSelect("Application_Rejected");
          break;
    }
     setAnchorEll(null);
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
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEll}
        open={opened}
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
        <MenuItem onClick={handleClosed}>All</MenuItem>
        <MenuItem onClick={handleClosed}>Submitted for Enphase Review</MenuItem>
        <MenuItem onClick={handleClosed}>Rejected by Enphase</MenuItem>
        <MenuItem onClick={handleClosed}>Submitted for PSEG Review</MenuItem>
        <MenuItem onClick={handleClosed}>Approved by PSEG</MenuItem>
        <MenuItem onClick={handleClosed}>Rejected by PSEG</MenuItem>
      </Menu>
      {name === "Battery Storage Rewards Program" ? (
        <RewardProgram
          open={opened}
          handleClick={handleClicked}
          selected={select}
          name={name}
        />
      ) : (
        <ApplicationformTable
          open={open}
          handleClick={handleClick}
          selected={selected}
          name={name}
        />
      )}
      {/* <ProfileHead
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      /> */}
    </>
  );
}

export default MenuItemList;
