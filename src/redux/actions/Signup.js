import Axios from 'axios';
import {BASE_URL} from '../../utils';

const signupRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  };
};

const signupSuccess = (message) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: message,
  };
};

const signupFailed = (message) => {
  return {
    type: 'REGISTER_FAILED',
    payload: message,
  };
};

export const Signup = (fields) => {
  return (dispatch) => {
    dispatch(signupRequest());
    return Axios({
      method: 'POST',
      data: fields,
      url: `${BASE_URL}/api/v1/auth/register`,
    })
      .then((res) => {
        const data = res.data.token.token;
        dispatch(signupSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(signupFailed(message));
      });
  };
};
