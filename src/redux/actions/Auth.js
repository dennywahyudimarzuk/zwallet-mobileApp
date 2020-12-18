import Axios from 'axios';
import {BASE_URL} from '../../utils';
import { ToastAndroid } from 'react-native';
import { PatchAll } from '../actions/Users'
import { Device } from './Device'

const AuthLoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

const AuthLoginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};
const AuthLoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};
const LogoutAuth = () => {
  return {
    type: 'LOGOUT',
  }
}

export const AuthLogin = (device_token, fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios({
      method: 'POST',
      data: fields,
      url: `${BASE_URL}/api/v1/auth/login`,
    })
      .then((res) => {
        const data = res.data.data.token;
        dispatch(AuthLoginSuccess(data));
        dispatch(Device(device_token));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = (token, data) => {
  return (dispatch) => {
    dispatch(PatchAll(token, data))
    dispatch(LogoutAuth())
  };
};
