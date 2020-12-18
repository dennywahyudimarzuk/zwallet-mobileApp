import Axios from 'axios';
import {BASE_URL} from '../../utils';

const UsersRequest = () => {
  return {
    type: 'USERS_REQUEST',
  };
};

const UsersSuccess = (data) => {
  return {
    type: 'USERS_SUCCESS',
    payload: data,
  };
};
const UsersPatch = (data) => {
  return {
    type: 'USERS_PATCH',
    payload: data.data[0],
  };
};
const UsersError = (error) => {
  return {
    type: 'USERS_ERROR',
    payload: error,
  };
};

export const GetUsers = (token) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'GET',
      url: `${BASE_URL}/api/v1/users/login`,
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        const data = res.data.data[0];
        dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};

export const PatchAll = (token, data) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'PATCH',
      url: `${BASE_URL}/api/v1/users`,
      data: data,
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(UsersPatch(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};

export const PatchPhoto = (token, dataPhoto) => async (dispatch) => {
  console.log(dataPhoto)
  dispatch(UsersRequest());
  try {
    const res = await Axios.patch(
      `${BASE_URL}/api/v1/users`,
      dataPhoto,
      {
        headers: {
          Authorization: `bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      },
    );
    dispatch(UsersPatch(res.data));
  } catch (error) {
    dispatch(UsersError(error.response.data));
  }
};
