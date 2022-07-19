import React,{useState} from "react";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Avatar,
} from "@material-ui/core";
import { Pagination } from "@mui/material";
import { MenuItems, PSEG } from "./constant";
import { useStyles } from "./style";

const GetProgram = (props) => {
    const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const COUNT = Math.ceil(props.item.length / rowsPerPage);

     const handleChangePage = (event, newPage) => {
       setPage(newPage);
    };

     const getIDDetails = () => {
       return (
         <div className={classes.applicationShow}>
           <span className={classes.applicationDetail}>
             Application Details
           </span>
           <div className={classes.description}>
             Click on the Application ID from the left pane to open the
             application
           </div>
         </div>
       );
    };
    
    const handleClose = (e) => {
      const { setIsActive, setCount, setMenuValue, setMenu, setMenuDesc } =
        props;
      setMenuValue(e.target.value);
      if (props.name === "Battery Storage Rewards Program") {
        switch (e.target.value) {
          case 0:
            setMenu("Application_Submitted");
            break;
          case 1:
            setMenu("Application_Rejected");
            break;
          case 2:
            setMenu("Application_Approved");
            break;
          case 3:
            setMenu("Site_Approved");
            break;
          case 4:
            setMenu("Site_Rejected");
            break;
        }
        setIsActive(0);
        setCount(0);
      } else {
        switch (e.target.value) {
          case 0:
            setMenuDesc("Site_Submitted");
            break;
          case 1:
            setMenuDesc("Site_Approved");
            break;
          case 2:
            setMenuDesc("Site_Rejected");
            break;
        }
        setIsActive(0);
        setCount(0);
      }
    };

    const displayId = (appln, site) => {
      return props.name === "Battery Lease Program" ? (
        <div className={classes.idDisplay}>{site}</div>
      ) : (
        <div className={classes.idDisplay}>
          {appln}_{site}
        </div>
      );
    };

     const mapFunct = () => {
       return props.name === "Battery Storage Rewards Program"
         ? PSEG
         : MenuItems;
     };
    
    return  <Card className={classes.cardSection}>
      <Card className={classes.selectOption}>
        <FormControl variant="standard" className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>
            Show Applicatons:
          </InputLabel>

          <Select
            value={props.menuValue}
            className={classes.menuItemSection}
            onChange={handleClose}
            MenuProps={{
              classes: {
                paper: classes.dropDownStyleEvent,
              },
            }}
            inputProps={{
              classes: {
                icon: classes.icon,
                root: classes.root,
              },
            }}
          >
            {mapFunct().map((ele, index) => (
              <div
                key={index}
                value={index}
                className={classes.mainMenuSection}
              >
                <div
                  className={classes.indicator}
                  style={{ background: ele.color }}
                ></div>
                <MenuItem className={classes.menuSec}>{ele.item}</MenuItem>
              </div>
            ))}
          </Select>
        </FormControl>
        <div className={classes.applnDetail}>
          {props.name === "Battery Lease Program"
            ? "Applications by Site ID"
            : "Applications by Application ID_Site ID"}
        </div>
        <div>
          {props.item
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((data, index) => {
              return (
                <div key={index} className={classes.boxSection}>
                  <Box
                    p={1}
                    className={
                      data.application_id !== props.cardActive
                        ? classes.boxDesign
                        : classes.boxColored
                    }
                    onClick={() => props.getBoxDetails(data.application_id)}
                  >
                    {displayId(data.application_id, data.site_id)}
                  </Box>
                </div>
              );
            })}
        </div>
        <Pagination
          className={classes.paginationDisplay}
          count={props.item.length === 0 ? 0 : COUNT}
          size="small"
          page={page}
          shape="rounded"
          onChange={handleChangePage}
        />
      </Card>
      <Card className={classes.documentSec}>{props.isActive===0? getIDDetails() : props.getBoxIdDetails()}</Card>
    </Card>
}

export default GetProgram;