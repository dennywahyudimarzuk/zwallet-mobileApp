import Axios from 'axios';
import {BASE_URL} from '../../utils';

const HistoryTransferRequest = () => {
  return {
    type: 'HISTORYTRANSFER_REQUEST',
  };
};

const HistoryTransferSuccess = (data) => {
  return {
    type: 'HISTORYTRANSFER_SUCCESS',
    payload: data,
  };
};
const HistoryTransferAllSuccess = (data) => {
  return {
    type: 'HISTORYTRANSFERALL_SUCCESS',
    payload: data,
  };
};
const HistoryTransferError = (error) => {
  return {
    type: 'HISTORYTRANSFER_ERROR',
    payload: error,
  };
};

export const GetHistoryTransfer = (token) => {
  return (dispatch) => {
    dispatch(HistoryTransferRequest());
    return Axios({
      method: 'GET',
      url: `${BASE_URL}/api/v1/transfer/history/all`,
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(HistoryTransferSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(HistoryTransferError(message));
      });
  };
};

export const GetHistoryTransferAll = (token) => {
  return (dispatch) => {
    dispatch(HistoryTransferRequest());
    return Axios({
      method: 'GET',
      url: `${BASE_URL}/api/v1/transfer/history/alls`,
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(HistoryTransferAllSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(HistoryTransferError(message));
      });
  };
};