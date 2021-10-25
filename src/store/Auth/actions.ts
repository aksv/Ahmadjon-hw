import * as types from './actionTypes';

export const signInSuccess = (payload) => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload
  }
};

// ------- SIGN UP --------------
export const signUpSuccess = (payload) => {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload
  }
};


// ------- SIGN OUT -------------
export const signOutError = (err) => ({
  type: types.SIGN_OUT_ERROR,
  payload: err
});

export const signOutPending = () => ({
  type: types.SIGN_OUT_PENDING
});

export const signOutSuccess = (payload) => {
  return {
    type: types.SIGN_OUT_SUCCESS,
    payload
  }
};


// ---------- LANGUAGE -----------

export const changeLanguage = (lang) => {
  return { type: types.LANGUAGE_CHANGE, payload: lang }
};


// --------- LOADING -------------

export const loading = (payload) => {
  return {
    type: types.LOADING,
    payload
  }
}