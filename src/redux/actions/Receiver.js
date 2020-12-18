import Axios from 'axios';
import {BASE_URL} from '../../utils';

const ReceiverRequest = () => {
  return {
    type: 'RECEIVER_REQUEST',
  };
};

const ReceiverSuccess = (data) => {
  return {
    type: 'RECEIVER_SUCCESS',
    payload: data,
  };
};
const ReceiverError = (error) => {
  return {
    type: 'RECEIVER_ERROR',
    payload: error,
  };
};

export const GetReceiver = (token, phone) => {
  return (dispatch) => {
    dispatch(ReceiverRequest());
    return Axios({
      method: 'GET',
      url: `${BASE_URL}/api/v1/users/search/receiver`,
      params: {phone},
      headers: {
        Authorization: `barier ${token}`,
      },
    })
      .then((res) => {
        const data = res.data.data[0];
        dispatch(ReceiverSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(ReceiverError(message));
      });
  };
};
