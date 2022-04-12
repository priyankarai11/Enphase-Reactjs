import { TOKEN } from "../../components/sessionStorage/index";
import * as CONSTANTS from "../../components/Utils/actionTypes";
import * as MESSAGES from "../../components/Utils/messagesConstants";
import * as MESSAGETYPES from "../../components/Utils/MessageTypes";
let initialState = {
  authUser: TOKEN,
  currentUser: "",
  message: "",
  messageType: "",
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SIGNIN_USER:
      return { ...state, loading: true };
    case CONSTANTS.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        message: MESSAGES.SIGNIN_SUCCESS,
        authUser: action.payload["auth"],
        currentUser: action.payload,
        messageType: MESSAGETYPES.SUCCESS,
        loading: false,
      };
    case CONSTANTS.USER_SIGNIN_FAILED:
      return {
        ...state,
        message: MESSAGES.SIGNIN_FAILED,
        messageType: MESSAGETYPES.ERROR,
        loading: false,
      };
    case CONSTANTS.USER_SIGNOUT_SUCCESS:
      return { ...state, authUser: "", currentUser: "", message: "" };
    case CONSTANTS.USER_SIGNOUT_FAILED:
      return { ...state, authUser: "", message: "" };
    case CONSTANTS.GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: action.payload };
    case CONSTANTS.CLEAR_MESSAGE:
      return { ...state, message: "", messageType: "" };
    default:
      return state;
  }
};

export default authReducer;
