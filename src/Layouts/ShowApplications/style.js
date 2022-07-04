import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  cardSection: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 30,
    marginBottom: 80,
    "@media (max-width: 735px)": {
      //   flexDirection: "column",
    },
  },

  indicator: {
    position: "relative",
    top: "75%",
    marginLeft: 20,
    // left: "46%",
    width: "9px",
    height: "9px",
    borderRadius: "10px",
  },

  txtField: {
    marginTop: 10,
    height: 52,
    width:546,
    "& .MuiFormLabel-root": {
      marginTop: 8,
    },
  },

  downloadSec: {
    marginLeft: 150,
    marginTop: 10,
    "@media (max-width: 1024px)": {
      marginLeft: 5,
    },
  },

  downloadSymbol: {
    width: 16,
    height: 19,
  },

  downloadLink: {
    textDecoration: "none",
    color: "#707070;",
    fontSize: 14,
    marginLeft: 10,
    "@media (max-width: 1024px)": {
      marginLeft:!2,
    },
  },

  approveButton: {
    color: "#ffffff",
    width: "90%",
    display: "block",
    background: "#F37320",
    minHeight: 37,
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 60,
    textTransform: "none",
    "&.MuiButton-root:hover": {
      background: "#F37320",
    },
  },

  approvedButton: {
    color: "#ffffff",
    width: "90%",
    display: "block",
    background: "#F37320",
    minHeight: 37,
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 60,
    textTransform: "none",
    "&.MuiButton-root.Mui-disabled": {
      opacity: 0.5,
      background: "#ff4800",
      color: "#ffffff",
    },
  },

  rejectButton: {
    "&.MuiButton-outlined": {
      marginBottom: 10,
      width: "100%",
      marginRight: 40,
      minHeight: 37,
      textTransform: "none",
    },
  },

  checkBox: {
    width: 16,
    height: 16,
  },

  checkBoxed: {
    width: 14,
    height: 14,
    marginTop: 12,
  },

  checkWithApprove: {
    marginLeft: 10,
    marginRight: 35,
  },

  checkWithApproved: {
    marginLeft: 10,
    marginRight: 50,
    marginTop: 12,
    color: "#545456",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif",
  },

  approvedPart: {
    display: "flex",
    flexDirection: "row",
  },

  applicationForm: {
    "&.MuiButton-outlined": {
      color: "#F37320",
      width: "17%",
      minHeight: 38,
      borderRadius: 4,
      borderColor: "#F37320",
      fontSize: 11,
      textTransform: "none",
      marginLeft: 20,
      "@media (max-width: 735px)": {
        width: "200%",
        marginBottom: 10,
        marginLeft: -25,
      },
    },
  },

  applicationFormed: {
    "&.MuiButton-outlined": {
      width: "17%",
      minHeight: 38,
      borderRadius: 4,
      fontSize: 11,
      textTransform: "none",
      marginLeft: 20,
      "@media (max-width: 735px)": {
        width: "200%",
        marginBottom: 10,
        marginLeft: -25,
      },
    },
  },

  openEnlighten: {
    "&.MuiButton-outlined": {
      width: "20%",
      textTransform: "none",
      float: "right",
      backgroundColor: "#F8F8F8",
      fontSize: 12,
      "@media (max-width: 735px)": {
        width: "200%",
        float: "none",
        marginLeft: -25,
      },
    },
  },

  pdf: {
    marginRight: 9,
  },

  buttonSec: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 735px)": {
      width: 120,
    },
  },

  mainMenuSection: {
    padding: 10,
  },

  menuSec: {
    marginTop: -22,
    marginLeft: 20,
    fontSize: 14,
    color: "#6F6F6F",
  },

  selectOption: {
    padding: "1px 10px 20px 20px",
    boxShadow: " 1px 0px 0px 0px gray",
    marginBottom: 30,
    borderRadius: "initial",
    marginTop: 20,
  },

  dropDownStyleEvent: {
    marginTop: 70,
  },

  inputLabel: {
    "&.Mui-focused": {
      color: "orange",
    },
  },

  menuItemSection: {
    marginRight: 60,
    width: 215,
    "@media (max-width: 1024px)": {
      marginRight: 450,
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "#ffffff",
    },
    "& .MuiSelect-select": {
      marginTop: 6,
      marginLeft: -18,
      marginBottom: -8,
    },
    "&:after ": {
      borderColor: "orange",
    },
  },

  idDisplay: {
    textAlign: "center",
  },

  applnDetail: {
    marginTop: 20,
    color: "#6F6F6F",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
    width: 186,
    "@media (max-width: 1000px)": {
      marginBottom: 20,
    },
  },

  applicationDetail: {
    // "@media (max-width: 1024px)": {
    //   padding: 20,
    // },
    color: "#6F6F6F",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  ShowReason: {
    cursor: "pointer",
    marginLeft: 12,
    color: "#2079F3",
    fontSize: 14,
  },

  applicationShow: {
    padding: "20px 20px 0 20px",
  },

  boxColored: {
    border: "1px solid #f37321",
    borderRadius: 6,
    backgroundColor: "#F5F5F5",
    color: "#000000",
    fontWeight: "bolder",
  },

  loaderShow: {
    color: "#f37321",
    marginLeft: 300,
    marginTop: 100,
    "@media (min-width: 1000px)": {
      marginLeft: 247,
      marginTop: -400,
      position:"fixed",
    },
  },

  paginationDisplay: {
    marginTop: 30,
    //marginLeft:30,
    // "@media (min-width: 1000px)": {
    //  width:650,
    // },
  },

  description: {
    color: "#6F6F6F",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 100,
    marginLeft: 300,
    "@media (max-width: 1024px)": {
      marginLeft: 10,
    },
  },

  formControl: {
    marginRight: -50,
  },

  boxSection: {
    width: "95%",
    marginTop: 6,
    //marginLeft: 30,
    borderRadius: 4,
    "@media (max-width: 758px)": {
      marginLeft: 5,
    },
  },

  boxDesign: {
    color: "#6F6F6F",
    backgroundColor: "#F5F5F5",
    border: "1px dashed #70707089",
    borderRadius: 6,
    cursor: "pointer",
  },

  textFieldSection: {
    display: "flex",
    flexDirection: "row",
    boxShadow: " 0px 1px 0px 0px gray",
    borderRadius: "initial",
    paddingBottom: 30,
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  },

  textFieldSec: {
    display: "flex",
    flexDirection: "column",
    width: 570,
    height: 500,
    boxShadow: "none",
    overflowY: "scroll",
    scrollbarWidth: "thin",
    "@media (max-width: 1024px)": {
      width: 585,
    },
  },

  documentSec: {
    marginLeft: 5,
    boxShadow: "none",
  },

  input: {
    fontSize: 14,
    color: "#545455",
    height: 40,
    //overflowWrap: "anywhere",
  },

  inputlabel: {
    fontSize: 14,
    color: "#545455",
    height: 40,
    marginBottom: 10,
  },

  portal: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    marginLeft: -10,
  },

  portalPSEG: {
    fontSize: 14,
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    marginLeft: -10,
    color: "#f37321",
  },

  uploadedYet: {
    color: "#7C7B7B",
    fontSize: 18,
    marginBottom: 10,
  },

  visit: {
    color: "#f37321",
    fontSize: 18,
    cursor: "pointer",
    marginLeft: 5,
  },

  checkBoxedIcon: {
    "& ..Mui-checked": {
      color: "#f37321s",
    },
  },

  checkBoxPortal: {
    width: 16,
    height: 16,
    marginRight: 14,
  },

  reference: {
    color: "#7C7B7B",
    fontSize: 18,
    marginTop: 20,
  },

  idDisply: {
    marginBottom: 20,
    color: "#000000",
    marginTop: 5,
  },

  displayPseg: {
    display: "flex",
    flexDirection: "column",
  },

  buttn: {
    display: "flex",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  },

  apprvd: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  },

  field: {
    color: "#f37321",
    marginLeft: 20,
    "@media (max-width: 1024px)": {
      marginBottom: 10,
    },
  },

  downloadPrint: {
    width: 570,
    marginRight: 50,
    height: 500,
    "@media (max-width: 1024px)": {
      width: 440,
      marginRight: 0,
    },
  },
});

