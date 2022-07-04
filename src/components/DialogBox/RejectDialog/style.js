import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    message: {
      marginTop:30,
    maxHeight: 100,
    border: "1px solid #F37320",
    padding: 5,
    overflowY: "auto",
    wordBreak: "break-word",
    borderRadius: 10,
    width:390,
  },
  reason: {
    color: "#565657",
    fontSize: 20,
    fontWeight: "bold",
    marginRight:100,
  },

    closeIcon: {
      float:"right",
  },
  
  outlinedbuttonsSubmit: {
    width: 110,
    border: "1px solid #C7C8CA",
    margin: "30px auto 0",
    fontSize: 14,
    minHeight: 36,
    textTransform: "none",
      marginBottom: 30,
    marginTop:15,
  },

});

export {useStyles}