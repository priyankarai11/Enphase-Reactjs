/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
 Card, TextField, Link, Checkbox
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router";
import pdf from "../../assets/icons/pdfDwnld.svg"
import checkBox from "../../assets/icons/checkBox.png"
import Reject from "../../assets/icons/reject.png";
import RejectDialog from "../../components/DialogBox/RejectDialog/index";
import ApproveDialog from "../../components/DialogBox/DialogAlert/approveDialog";
import RejectModal from "../../components/DialogBox/DialogAlert/RejectModal"
import RejectNotFound from "../../components/DialogBox/RejectNotFound.js/index"
import { TOKEN } from "../../components/sessionStorage";
import {ButtonDisplay} from "./constant"
import Documents from "./documents"
import { useStyles } from "./style";

const ShowApplications = (props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(0);
  const [message, setMessage] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [flag, setFlag]=useState(false)
  let [open, setOpen] = useState(false);
  let [opened, setOpened] = useState(false);
  const [count, setCount] = useState(0);
  const [cnt, setCnt] = useState(0);
  const [approved, setApproved] = useState(0);
  const [getValue, setGetValue] = useState(0);
  const [applicationId, setApplicationId] = useState();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [getValues, setGetValues] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const [getItem, setGetItem] = useState("")
  const [reference, setReference] = useState("")
  const [changeStatus, setChangeStatus] = useState(0);
  const [homeowner, setHomeowner] = useState({
    meter: "",
    programUrl: null,
    signed: null,
    phone: "",
    email: "",
    capacity: "",
    option: "",
    siteId: "",
    url: null,
    first_name: "",
    last_name: "",
    address1: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    EAN: "",
    payment: "",
  });
  const { program_id } = useParams();

  const getStatusIdData = () => {
    const myHeaders = new Headers({
      // "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    fetch(
      `https://gs-stg.qa-enphaseenergy.com/enrollment-mgr/api/v1/application/${applicationId}?programId=${program_id}`,
      {
        method: "GET",
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((res) => {
       setIsPageLoading(false);
        const item = res.data.homeowner_info;
        const id = res.data.payment_method;
        const programUrl = res.data.signed_tandc_form_downloadable_url;
        const signed = res.data.signed_form1_downloadable_url;
        const URL = res.data.signed_application_form_downloadable_url;
        const siteId = res.data.site_id;
        const anURL = res.data.signed_tandc_form_downloadable_url;
        setHomeowner({
          ...homeowner,
          meter:item.utility_meter_number,
          siteId: siteId,
          programUrl: programUrl,
          signed: signed,
          url: URL || anURL,
          first_name: item.first_name,
          last_name: item.last_name,
          capacity: item.kw_capacity_committed,
          option: item.program_type,
          payment: id,
          address1: item.address1,
          address2: item.address2,
          city: item.city,
          phone: item.phone,
          state: item.state,
          zip: item.zip,
          EAN: item.electric_account_number,
          email: item.email_address,
        })
        const msgLength = res.data.log_history
        const message = res.data.log_history[msgLength.length-1]
        setTimestamp(res.data.last_modified_timestamp);
        setGetValues(res.data.signed_tandc_form_downloadable_url);
        setReference(res.data.utility_reference_id);
        setMessage(message.message);
      });
  };
  
  const getValidated = () => {
    if (count < 1) {
      return <div>All fields validation pending</div>;
    } else {
      switch (props.name) {
        case "APS Residential Battery Program":
          return count > 10 ? (
            <div>All Fields Validated</div>
          ) : (
            <div>Validation of {11 - count} field pending</div>
          );
        case "Battery Lease Program":
          return count > 6 ? (
            <div>All Fields Validated</div>
          ) : (
            <div>Validation of {7 - count} field pending</div>
          );
        default:
          return count > 12 ? (
            <div>All Fields Validated</div>
          ) : (
            <div>Validation of {13 - count} field pending</div>
          );
      }
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpen = () => {
    setOpened(true);
  };

  const  displayStatus= () => {
    return props.name === "Battery Storage Rewards Program"
      ?
        validatedPSEGFunc()
      : validatedFunc();
  }

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne)
  };
  
  const handleChange = (e) => {
    setGetItem(e.target.value)
  }

  const getDisplayItemStatus = () => {
    return getItem.length > 1 ? (
      <img src={checkBox} className={classes.checkBoxed} />
    ) : (
      <img src={Reject} className={classes.checkBoxed} />
    );
  }

  

  const validatedPSEGFunc = () => {
     switch (getValue) {
       case 0:
         return (
           <div className={classes.apprvd}>
             <span className={classes.field}>{getValidated()}</span>
             <div>
               {cnt === approved ? (
                 <div className={classes.displayPseg}>
                   <span className={classes.portal}>
                     <Checkbox
                       style={{ color: "#f37321" }}
                       className={classes.checkBoxedIcon}
                       label="Value 1"
                       value={checkedOne}
                       onChange={handleChangeOne}
                     />
                     I have uploaded PSEG Enrolment Form on PSEG Portal.{" "}
                   </span>
                   {checkedOne ? (
                     <TextField
                       label="Enter PSEG Reference ID"
                       variant="standard"
                       onChange={handleChange}
                       InputProps={{
                         endAdornment:
                           getItem.length < 1 ? "" : getDisplayItemStatus(),
                         className: classes.inputlabel,
                       }}
                       InputLabelProps={{ shrink: true }}
                     />
                   ) : (
                     <span className={classes.uploadedYet}>
                       {" "}
                       Not uploaded yet?{" "}
                       <a
                         target="_blank"
                         href="https://admin.energyhub.net/utility/login.html"
                       >
                         <Link className={classes.visit}>
                           Visit PSEG Portal &#62;
                         </Link>
                       </a>
                     </span>
                   )}
                 </div>
               ) : (
                 ""
               )}
               <div className={classes.buttn}>
                 <div>
                   <Button
                     variant="contained"
                     className={classes.approvedButton}
                     onClick={handleClickOpen}
                     disabled={getItem.length < 2}
                   >
                     Provide Enphase Approval
                   </Button>
                   {open && (
                     <ApproveDialog
                       applicationId={applicationId}
                       timestamp={timestamp}
                       setOpen={setOpen}
                       open={open}
                       setIsActive={setIsActive}
                       dataStatus="Application_Approved"
                       homeowner={homeowner}
                       getItem={getItem}
                       flag={flag}
                       setFlag={setFlag}
                     />
                   )}
                   <RejectNotFound
                     open={flag}
                     setOpen={setFlag}
                     siteId={homeowner.siteId}
                   />
                 </div>
                 <div>
                   <Button
                     variant="outlined"
                     className={classes.rejectButton}
                     onClick={handleOpen}
                   >
                     Reject
                   </Button>
                   {opened && (
                     <RejectModal
                       applicationId={applicationId}
                       timestamp={timestamp}
                       setOpen={setOpened}
                       open={opened}
                       setIsActive={setIsActive}
                       dataStatus="Application_Rejected"
                     />
                   )}
                 </div>
               </div>
             </div>
           </div>
         );
       case 1:
         return (
           <div className={classes.apprvd}>
             <span className={classes.field}>All fields validated</span>
             <div className={classes.approvedPart}>
               <img src={Reject} className={classes.checkBox} />
               <div className={classes.field}>
                 The Application has been rejected by Enphase
                 <Link className={classes.ShowReason} onClick={handleClickOpen}>
                   (Show Reason)
                 </Link>
                 <RejectDialog
                   message={message}
                   setOpen={setOpen}
                   open={open}
                 />
               </div>
             </div>
           </div>
         );
       case 2:
         return (
           <div className={classes.apprvd}>
             <span className={classes.field}>All fields validated</span>
             <div>
               <div className={classes.displayPseg}>
                 <span className={classes.portal}>
                   <img src={checkBox} className={classes.checkBoxPortal} />
                   PSEG Enrolment Form uploaded on PSEG Portal
                 </span>
                 <span className={classes.reference}>PSEG Reference ID</span>
                 <span className={classes.idDisply}>{reference}</span>
               </div>
               <div className={classes.buttn}>
                 <div>
                   <Button
                     variant="contained"
                     className={classes.approvedButton}
                     onClick={handleClickOpen}
                   >
                     Provide Enphase Approval
                   </Button>
                   {open && (
                     <ApproveDialog
                       applicationId={applicationId}
                       timestamp={timestamp}
                       setOpen={setOpen}
                       open={open}
                       setIsActive={setIsActive}
                       setCheckedOne={setCheckedOne}
                       dataStatus="Site_Approved"
                       homeowner={homeowner}
                       getItem={getItem}
                       flag={flag}
                       setFlag={setFlag}
                     />
                   )}
                   <RejectNotFound
                     open={flag}
                     setOpen={setFlag}
                     siteId={homeowner.siteId}
                   />
                 </div>
                 <div>
                   <Button
                     variant="outlined"
                     className={classes.rejectButton}
                     onClick={handleOpen}
                   >
                     Reject
                   </Button>
                   {opened && (
                     <RejectModal
                       applicationId={applicationId}
                       timestamp={timestamp}
                       setOpen={setOpened}
                       open={opened}
                       setIsActive={setIsActive}
                       dataStatus="Site_Rejected"
                     />
                   )}
                 </div>
               </div>
             </div>
           </div>
         );
       case 3:  return (
         <div className={classes.apprvd}>
           <span className={classes.field}>All fields validated</span>
           <div>
             <div className={classes.displayPseg}>
               <span className={classes.portal}>
                 <img src={checkBox} className={classes.checkBoxPortal} />
                 PSEG Enrolment Form uploaded on PSEG Portal
               </span>
               <span className={classes.reference}>PSEG Reference ID</span>
               <span className={classes.idDisply}>{reference}</span>
             </div>
             <span className={classes.portalPSEG}>
               <img src={checkBox} className={classes.checkBoxPortal} />
               The Application has been approved by PSEG
             </span>
           </div>
         </div>
       );
       case 4:  return (
         <div className={classes.apprvd}>
           <span className={classes.field}>All fields validated</span>
           <div>
             <div className={classes.displayPseg}>
               <span className={classes.portal}>
                 <img src={checkBox} className={classes.checkBoxPortal} />
                 PSEG Enrolment Form uploaded on PSEG Portal
               </span>
               <span className={classes.reference}>PSEG Reference ID</span>
               <span className={classes.idDisply}>{reference}</span>
             </div>
             <span className={classes.portalPSEG}>
               <img src={Reject} className={classes.checkBoxPortal} />
               The Application has been approved by PSEG
               <Link className={classes.ShowReason} onClick={handleClickOpen}>
                 (Show Reason)
               </Link>
               <RejectDialog message={message} setOpen={setOpen} open={open} />
             </span>
           </div>
         </div>
       );
     }
  }

  const validatedFunc = () => {
    switch (getValue) {
      case 0:
        return (
          <div className={classes.apprvd}>
            <span className={classes.field}>{getValidated()}</span>
            <div className={classes.buttn}>
              <div>
                <Button
                  variant="contained"
                  className={classes.approvedButton}
                  onClick={handleClickOpen}
                  disabled={approved !== cnt}
                >
                  Approve
                </Button>
                <ApproveDialog
                  applicationId={applicationId}
                  timestamp={timestamp}
                  setOpen={setOpen}
                  open={open}
                  setIsActive={setIsActive}
                  dataStatus="Site_Approved"
                  homeowner={homeowner}
                  flag={flag}
                  setFlag={setFlag}
                />
               {flag && (<RejectNotFound
                  open={flag}
                  setOpen={setFlag}
                  siteId={homeowner.siteId}
                />)}
              </div>
              <div>
                <Button
                  variant="outlined"
                  className={classes.rejectButton}
                  onClick={handleOpen}
                >
                  Reject
                </Button>
                {opened && (
                  <RejectModal
                    applicationId={applicationId}
                    timestamp={timestamp}
                    setOpen={setOpened}
                    open={opened}
                    setIsActive={setIsActive}
                    dataStatus="Site_Rejected"
                  />
                )}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={classes.apprvd}>
            <span className={classes.field}>All fields validated</span>
            <div className={classes.approvedPart}>
              <img src={checkBox} className={classes.checkBox} />
              <div className={classes.field}>
                The Application has been Approved
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={classes.apprvd}>
            <span className={classes.field}>All fields validated</span>
            <div className={classes.approvedPart}>
              <img src={Reject} className={classes.checkBox} />
              <div className={classes.field}>
                The Application has been Rejected
                <Link className={classes.ShowReason} onClick={handleClickOpen}>
                  (Show Reason)
                </Link>
                <RejectDialog message={message} setOpen={setOpen} open={open} />
              </div>
            </div>
          </div>
        );
    }
  };

  useEffect(() => {
    getStatusIdData();
  }, [applicationId]);

  const getButtons = () => {
    switch (props.name) {
      case "APS Residential Battery Program":
        return (
          <Button variant="outlined" className={classes.applicationForm}>
            <img className={classes.pdf} src={pdf} /> Program T&C Document
          </Button>
        );
      case "Battery Lease Program":
        return (
          <Button variant="outlined" className={classes.applicationForm}>
            <img className={classes.pdf} src={pdf} /> Application Form
          </Button>
        );
      default:
        return (
          <>
            {ButtonDisplay.map((ele, index) => {
              return (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => buttonClickedFunc(index)}
                  className={
                    index === changeStatus
                      ? classes.applicationForm
                      : classes.applicationFormed
                  }
                >
                  <img className={classes.pdf} src={pdf} /> {ele.item}
                </Button>
              );
            })}
          </>
        );
    }
  };

  const buttonClickedFunc = (id) => {
    setChangeStatus(id);
    switch (id) {
      case 0:
        return setGetValues(homeowner.programUrl);
      case 1:
        return setGetValues(homeowner.signed);
      case 2:
        return setGetValues(homeowner.url);
    }
  };

  const getUrl = () => {
    return props.name === "Battery Storage Rewards Program"
      ? getValues || "about:blank"
      : homeowner.url || "about:blank";
  };

  return (
    <Documents
      isActive={isActive}
      setIsActive={setIsActive}
      applicationId={applicationId}
      setApplicationId={setApplicationId}
      setGetValue={setGetValue}
      name={props.name}
      getValue={getValue}
      homeowner={homeowner}
      count={count}
      setCount={setCount}
      setChangeStatus={setChangeStatus}
      setApproved={setApproved}
      cnt={cnt}
      setCnt={setCnt}
      setCheckedOne={setCheckedOne}
      getButtons={getButtons}
      displayStatus={displayStatus}
      getUrl={getUrl}
    />
  );
};

export default ShowApplications;
