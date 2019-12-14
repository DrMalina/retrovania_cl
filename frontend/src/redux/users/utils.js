import * as actions from 'redux/users/actions';
import axios from 'axios';
import User from 'services/Users';

export const reauthorize = token => async dispatch => {
  try {
    dispatch(actions.reauthorize());
    const response = await User.reauthorize(token);
    dispatch(actions.signInSuccess(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
  } catch (error) {
    dispatch(actions.signInFailure(error));
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

export const signInReq = (route, formValues) => async dispatch => {
  try {
    dispatch(actions.signInInit());
    const response = await User.authenticate(route, formValues);
    dispatch(actions.signInSuccess(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
  } catch (error) {
    dispatch(actions.signInFailure(error));
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

export const signOutReq = () => async dispatch => {
  try {
    dispatch(actions.signOutInit());
    const response = await User.deauthenticate();
    dispatch(actions.signOutSuccess(response.data.user));
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  } catch (error) {
    dispatch(actions.signOutFailure(error));
    if (localStorage.token) localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};
