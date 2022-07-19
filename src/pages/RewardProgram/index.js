/** @format */

import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TablePagination, TableContainer, Link } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TOKEN } from "../../components/sessionStorage";
import { useParams } from "react-router";
import { FaSlidersH } from "react-icons/fa";
import { useStyles } from "./style";

function RewardProgram({ open, handleClick, selected,name}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([5, 10, 25, 100, 150]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status,setStatus]=useState("")
  const navigate = useNavigate();
  const { program_id } = useParams();
  localStorage.setItem("person_id", program_id);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const getData = () => {
    const myHeaders = new Headers({
      // "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });

    fetch(
      `https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/all/view/${program_id}?page=0&page_size=1000&filter_status=`,
      {
        method: "GET",
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);

        for (let i in res.data) {
          let set = res.data[i].map((ele) => ele);
          if (set.length === 0) {
            setItems([]);
          } else setItems(set);
        }
      });
    };
    
    const getTimestamp = (time) => {
        const d = new Date(time);
        const date =
          d.toDateString() +
          ", " +
          d.getHours() +
          ":" +
          d.getMinutes() +
          ":" +
          d.getSeconds(); 
        return date
    }

    const getStatus = (data) => {
        switch (data) {
          case "Application_Submitted":
            return "#F0D852";
          case "Application_Approved":
            return "#F0D852";
          case "Site_Rejected":
            return "#FA2E2E";
          case "Site_Approved":
            return "#4ED01F";
          case "Application_Rejected":
            return "#FA2E2E";
        }
    }

    const getStatusName = (data) => {
        switch (data) {
          case "Application_Submitted":
            return "Submitted for Enphase Review";
          case "Application_Approved":
            return "Submitted for PSEG Review";
          case "Site_Rejected":
            return "Rejected by PSEG";
          case "Site_Approved":
            return "Approved by PSEG";
          case "Application_Rejected":
            return "Rejected by Enphase";
        }
   }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Paper sx={{ width: "100%" }} className={classes.paper}>
        <TableContainer
          className={classes.tableContainer}
          sx={{ maxHeight: 440 }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.tableTop}>
              <TableRow className={classes.tableHead}>
                <TableCell className={classes.tabelCell}>
                  APPLICATION ID
                </TableCell>
                <TableCell className={classes.tabelCell}>SITE ID</TableCell>
                <TableCell className={classes.tabelCell}>
                  DLRP CONTRACTED AMOUNT (kW)
                </TableCell>
                <TableCell className={classes.tabelCell}>
                  HOME OWNER FULL NAME
                </TableCell>
                <TableCell className={classes.tabelCell}>
                  APPLICATION STATUS
                  <FaSlidersH
                    className={classes.filter}
                    onClick={handleClick}
                    id="demo-positioned-menu"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  />
                </TableCell>
                <TableCell className={classes.tabelCell}>
                  TIMESTAMP
                  <InfoOutlinedIcon className={classes.filtered} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {isLoading && <CircularProgress className={classes.loaderShow} />}
              {items
                .filter(
                  (data) => 
                    selected === "" ||
                    selected === "All" ||
                    data.application_status === selected
                )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                //   .length <1 ?
                //   <TableRow>
                //    <TableCell colSpan={items.length}>
                //     <div display="flex" justifyContent="center" alignItems="center" minHeight="150px" flexDirection="column">
                //       {/* <DraftsIcon fontSize="large" color="disabled" /> */}
                //        No Data Found
                //     </div>
                //  </TableCell>
                // </TableRow>
                //   :
                //    items
                .map((data) => {
                  return (
                    <TableRow>
                      <TableCell className={classes.tableRow}>
                        <Link
                          className={classes.link}
                          onClick={() =>
                            navigate(
                              `/view-application/${data.application_id}/${program_id}/${name}`
                            )
                          }
                        >
                          {data.application_id}
                        </Link>
                      </TableCell>
                      <TableCell className={classes.tableRow}>
                        {data.site_id === null ? "---" : data.site_id}
                      </TableCell>{" "}
                      <TableCell className={classes.tableRow}>
                        {data.committed_capacity}
                      </TableCell>{" "}
                      <TableCell className={classes.tableRow}>
                        {data.home_owner_first_name} {data.home_owner_last_name}
                      </TableCell>
                      <TableCell className={classes.tableRow}>
                        <Chip
                          className={classes.root}
                          avatar={
                            <div
                              className={classes.roundIcon}
                              style={{
                                background: getStatus(data.application_status),
                              }}
                            ></div>
                          }
                          label={
                            <div className={classes.labelStyle}>
                              {getStatusName(data.application_status)}
                            </div>
                          }
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell className={classes.tableRow}>
                        {getTimestamp(data.last_modified_at)}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={pages}
          component="div"
          count={
            items.filter(
              (data) =>
                selected === "" ||
                selected === "All" ||
                data.application_status === selected
            ).length
          }
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
export default RewardProgram;
