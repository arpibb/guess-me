import { myFirebase } from "../firebase/firebase";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

const requestSignUp = () => {
  return {
    type: SIGNUP_REQUEST
  };
};

const receiveSignUp = user => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
};

const signUpError = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

export const signUpUser = (username, email, password) => dispatch => {
  dispatch(requestSignUp());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email.toString(), password)
    .then(user => {
      dispatch(receiveSignUp(user));
    })
    .catch(error => {
      console.log(error)
      dispatch(signUpError());
    });
};