import {
  SIGNIN_USER,
  SIGNOUT_USER,
} from "../../components/Utils/actionTypes/index";

export function userSignIn(user) {
  return { type: SIGNIN_USER, payload: user };
}

export function userSignOut() {
  return { type: SIGNOUT_USER };
}
