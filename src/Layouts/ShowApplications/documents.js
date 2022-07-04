/** @format */

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Avatar,
} from "@material-ui/core";
import { useParams } from "react-router";
import { Pagination } from "@mui/material";
import { TOKEN } from "../../components/sessionStorage";
import { MenuItems, PSEG } from "./constant";
import { useStyles } from "./style";

const Documents = (props) => {
  const classes = useStyles();
  const [menuValue, setMenuValue] = useState(0);
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [cardActive,setCardActive]=useState(null)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [menuDesc, setMenuDesc] = useState("Site_Submitted");
  const [menu,setMenu]=useState("Application_Submitted")
  const { program_id } = useParams();
  const COUNT = Math.ceil(item.length / rowsPerPage);


  const getStatus = () => {
    return props.name === "Battery Storage Rewards Program"? menu: menuDesc
  }

  const handleClose = (e) => {
    const { setIsActive, setCount } = props;
    setMenuValue(e.target.value);
    if (props.name === "Battery Storage Rewards Program")
    {
      switch (e.target.value) {
        case 0:
          setMenu("Application_Submitted");
          setIsActive(0);
          setCount(0);
          break;
        case 1: setMenu("Application_Rejected");
          setIsActive(0);
           setCount(0);
          break;
        case 2: setMenu("Application_Approved");
          setIsActive(0);
           setCount(0);
          break;
        case 3: setMenu("Site_Approved");
          setIsActive(0);
           setCount(0);
          break;
        case 4: setMenu("Site_Rejected");
          setIsActive(0);
           setCount(0);
          break;
      }
    }
    else {
      switch (e.target.value) {
        case 0:
          setMenuDesc("Site_Submitted");
          setIsActive(0);
           setCount(0);
          break;
        case 1:
          setMenuDesc("Site_Approved");
          setIsActive(0);
           setCount(0);
          break;
        case 2:
          setMenuDesc("Site_Rejected");
          setIsActive(0);
           setCount(0);
          break;
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getStatusData = () => {
    const myHeaders = new Headers({
      // "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    fetch(
      //https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/all/view/${program_id}?page=0&page_size=1000&filter_status=
      `https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/applicationids/${program_id}?filter_status=${getStatus()}&page_no=0&page_size=1000`,
      {
        method: "GET",
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setItem(res.data.data);
      });
  };

  const getBoxDetails = (id) => {
    const { isActive, setIsActive, setApplicationId, setChangeStatus } = props;
    setIsActive(isActive + 1);
    setApplicationId(id);
    setCardActive(id)
    setChangeStatus(0)
  };


  const displayId = (appln,site) => {
   return props.name === "Battery Lease Program" ? (
     <div className={classes.idDisplay}>{site}</div>
   ) : (
     <div className={classes.idDisplay}>
       {appln}_{site}
     </div>
   );
  }

  const mapFunct = () => {
    return props.name === "Battery Storage Rewards Program" ? PSEG : MenuItems
  }
  
  useEffect(() => {
    const { setGetValue } = props;
    getStatusData();
    setGetValue(menuValue);
  }, [menuValue]);

  return (
    <Card className={classes.cardSection}>
      <Card className={classes.selectOption}>
        <FormControl variant="standard" className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>
            Show Applicatons:
          </InputLabel>

          <Select
            value={menuValue}
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
          {item
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((data, index) => {
              return (
                <div key={index} className={classes.boxSection}>
                  <Box
                    p={1}
                    className={
                      data.application_id !== cardActive
                        ? classes.boxDesign
                        : classes.boxColored
                    }
                    onClick={() => getBoxDetails(data.application_id)}
                  >
                    {displayId(data.application_id, data.site_id)}
                  </Box>
                </div>
              );
            })}
        </div>
        <Pagination
          className={classes.paginationDisplay}
          count={item.length === 0 ? 0 : COUNT}
          size="small"
          page={page}
          shape="rounded"
          onChange={handleChangePage}
        />
      </Card>
      <Card className={classes.documentSec}>{props.getIDDetails()}</Card>
    </Card>
  );
};

export default Documents;
