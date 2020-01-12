import * as actions from 'redux/users/actions';
import { cartCleanup } from 'redux/cart/actions';
import { cartFetch, cartPersist } from 'redux/cart/utils';
import axios from 'axios';
import User from 'services/Users';

export const reauthorize = token => async dispatch => {
  try {
    dispatch(actions.reauthorize());
    const response = await User.reauthorize(token);
    dispatch(actions.signInSuccess(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    dispatch(cartFetch());
  } catch (error) {
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
    dispatch(actions.signInFailure(error));
    dispatch(cartCleanup());
  }
};

export const signInReq = (route, formValues) => async dispatch => {
  try {
    dispatch(actions.signInInit());
    const response = await User.authenticate(route, formValues);
    dispatch(actions.signInSuccess(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    dispatch(cartFetch());
  } catch (error) {
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
    dispatch(actions.signInFailure(error));
  }
};

export const signOutReq = () => async dispatch => {
  try {
    await dispatch(cartPersist());
    dispatch(actions.signOutInit());
    const response = await User.deauthenticate();
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
    dispatch(actions.signOutSuccess(response.data.user));
    dispatch(cartCleanup());
  } catch (error) {
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
    dispatch(actions.signOutFailure(error));
    dispatch(cartCleanup());
  }
};
