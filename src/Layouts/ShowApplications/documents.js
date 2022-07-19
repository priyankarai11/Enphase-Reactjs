/** @format */

import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import DownloadApplication from "../../assets/icons/downloadApplication.svg";
import ApplicationDetail from "./apllicationDetail";
import { TOKEN } from "../../components/sessionStorage";
import GetProgram from "./GetProgram";
import { useStyles } from "./style";

const Documents = (props) => {
  const classes = useStyles();
  const [menuValue, setMenuValue] = useState(0);
  const [item, setItem] = useState([]);
  const [cardActive,setCardActive]=useState(null)
  const [menuDesc, setMenuDesc] = useState("Site_Submitted");
  const [menu, setMenu] = useState("Application_Submitted")

  const { program_id } = useParams();
  
  const getStatus = () => {
    return props.name === "Battery Storage Rewards Program"? menu: menuDesc
  }

  const countIncrement = () => {
    const { setCount, count } = props;
    setCount(count + 1);
  };

  const getApprovedClick = () => {
     const { setCnt, cnt } = props;
    setCnt(cnt + 1);
  };

  const getRejectedClick = () => {
     const { setCnt, cnt } = props;
    if (cnt < 1) {
      setCnt(0);
    } else setCnt(cnt - 1);
  };

  const countDecrement = () => {
      const { setCount, count } = props;
    setCount(count - 1);
  };

  const getStatusData = () => {
    const myHeaders = new Headers({
      // "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    fetch(
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
  
  const displayDownload = () => {
    return props.getUrl() === "about:blank" ? (
      ""
    ) : (
      <>
        <a href={props.getUrl()} target="_blank" rel="noopener noreferrer">
          <img
            className={classes.downloadSymbol}
            src={DownloadApplication}
            onClick={() => props.getUrl()}
          />
        </a>
        <a
          className={classes.downloadLink}
          href={props.getUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Application
        </a>
        {/* {isPageLoading && (
                <CircularProgress className={classes.loaderShow} />
              )} */}
      </>
    );
  }

   const getBoxIdDetails = () => {
     return (
       <div className={classes.applicationShow}>
         <div>
           <span className={classes.applicationDetail}>
             Application Details
           </span>
           <div className={classes.buttonSec}>
             <div>
               {props.getUrl()==="about:blank"?"":props.getButtons()}
               <a
                 target="_blank"
                 href="https://enlighten-qa2.enphaseenergy.com/login"
               >
                 <Button variant="outlined" className={classes.openEnlighten}>
                   Open Site Details on Enlighten
                 </Button>
               </a>
             </div>
           </div>
         </div>
         <Card className={classes.textFieldSection}>
           <div>
             <iframe
               className={classes.downloadPrint}
               type="text/html"
               src={props.getUrl() + "#toolbar=0"}
             />
             <div className={classes.downloadSec}>{displayDownload()}</div>
           </div>
           <Card className={classes.textFieldSec}>
             <ApplicationDetail
               homeowner={props.homeowner}
               name={props.name}
               getValue={props.getValue}
               countIncrement={countIncrement}
               getApprovedClick={getApprovedClick}
               getRejectedClick={getRejectedClick}
               countDecrement={countDecrement}
               setApproved={props.setApproved}
               setCheckedOne={props.setCheckedOne}
               applicationId={props.applicationId}
             />
           </Card>
         </Card>
         {props.displayStatus()}
       </div>
     );
   };

   const getBoxDetails = (id) => {
     const {
       setIsActive,
       isActive,
       setApplicationId,
       setChangeStatus,
     } = props;
     setIsActive(isActive + 1);
     setApplicationId(id);
     setCardActive(id);
     setChangeStatus(0);
  };
 
  useEffect(() => {
    const { setGetValue } = props;
    getStatusData();
    setGetValue(menuValue);
  }, [menuValue]);
 
  return (
    <GetProgram
      item={item}
      cardActive={cardActive}
      getBoxDetails={getBoxDetails}
      setIsActive={props.setIsActive}
      setCount={props.setCount}
      setMenu={setMenu}
      setMenuValue={setMenuValue}
      setMenuDesc={setMenuDesc}
      menuValue={menuValue}
      getButtons={props.getButtons}
      getUrl={props.getUrl}
      displayStatus={props.displayStatus}
      getBoxIdDetails={getBoxIdDetails}
      isActive={props.isActive}
    />
  );
};

export default Documents;
