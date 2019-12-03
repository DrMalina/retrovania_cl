import * as actions from 'redux/users/actions';
import userAPI from 'services/Users';

export const signInReq = (formValues, path) => async dispatch => {
  try {
    dispatch(actions.signInInit());
    const response = await userAPI.post(path, formValues);
    dispatch(actions.signInSuccess(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
  } catch (error) {
    dispatch(actions.signInFailure(error));
    localStorage.removeItem('token');
  }
};
