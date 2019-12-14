import {
  REAUTHORIZE,
  SIGN_IN_INIT,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_INIT,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS
} from './types';

export const reauthorize = () => ({
  type: REAUTHORIZE
});

export const signInInit = () => ({
  type: SIGN_IN_INIT
});

export const signInSuccess = userInfo => ({
  type: SIGN_IN_SUCCESS,
  payload: userInfo
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  meta: {
    error
  }
});

export const signOutInit = () => ({
  type: SIGN_OUT_INIT
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  meta: {
    error
  }
});
