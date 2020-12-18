import Axios from 'axios';
import { GetUsers } from './Users';
import {BASE_URL} from '../../utils';
import { GetHistoryTransfer } from './HistoryTransfer';

const TransferRequest = () => {
  return {
    type: 'TRANSFER_REQUEST',
  };
};

const TransferSuccess = (data) => {
  return {
    type: 'TRANSFER_SUCCESS',
    payload: data,
  };
};
const PreTransfer = (data) => {
  return {
    type: 'TRANSFER_AMOUNT_SUCCESS',
    payload: data,
  };
};
const TransferError = (error) => {
  return {
    type: 'TRANSFER_ERROR',
    payload: error,
  };
};

export const PreCreateTransfer = (data) => {
  // console.log(data);
  // console.log('data from pre transfer');
  return (dispatch) => {
    dispatch(PreTransfer(data));
  };
};

export const CreateTransfer = (token, data) => {
  return (dispatch) => {
    // console.log(token);
    // console.log('data createTransfer redux');
    dispatch(TransferRequest());
    dispatch(TransferSuccess(data));
    return Axios({
      method: 'POST',
      url: `${BASE_URL}/api/v1/transfer`,
      data: data,
      headers: {
        Authorization: `bearier ${token}`,
      },
    })
      .then((res) => {
        // const data = res.data.data;
        // console.log(res);
        // console.log('res');
        dispatch(GetUsers(token));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TransferError(message));
      });
  };
};
