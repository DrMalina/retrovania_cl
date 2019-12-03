import * as types from './types';

export const signInInit = () => {
  return {
    type: types.SIGN_IN_INIT
  };
};

export const signInSuccess = userInfo => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: userInfo
  };
};

export const signInFailure = error => {
  return {
    type: types.SIGN_IN_FAILURE,
    meta: {
      error
    }
  };
};

export const signOut = () => {
  // TODO
  return {
    type: types.SIGN_OUT
  };
};
