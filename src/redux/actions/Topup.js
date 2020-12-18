import Axios from 'axios';
import {BASE_URL} from '../../utils';

const TopupRequest = () => {
  return {
    type: 'TOPUP_REQUEST',
  };
};

const TopupSuccess = (data) => {
  return {
    type: 'TOPUP_SUCCESS',
    payload: data,
  };
};
const TopupError = (error) => {
  return {
    type: 'TOPUP_ERROR',
    payload: error,
  };
};

export const GetTopup = (token) => {
  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: 'GET',
      url: `${BASE_URL}/api/v1/topup`,
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(TopupSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TopupError(message));
      });
  };
};
