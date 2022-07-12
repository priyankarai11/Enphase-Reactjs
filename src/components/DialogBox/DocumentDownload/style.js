/** @format */

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formText: {
    color: "#565657",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
    width: 350,
  },

  reason: {
    fontWeight: "bold",
    marginRight: 100,
    fontSize: "1.25rem",
    fontFamily: "Roboto",
    marginTop: -7,
  },

  loaderShow: {
    color: "#f37321",
    marginLeft: 300,
    marginTop: 100,
    "@media (min-width: 1000px)": {
      marginLeft: 800,
    },
  },

  downloadSec: {
    margin: "40px 10px 30px 10px",
  },

    download: {
      float: "right",
      cursor:"pointer",
    },

  closeIcon: {
      float: "right",
      color:"grey",
  },

  document: {
    color: "#565657",
    fontSize: 14,
    marginTop:30,
  },
});

export { useStyles };
