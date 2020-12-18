const DeviceRequest = () => {
  return {
    type: 'DEVICE_REQUEST',
  };
};

const DeviceSuccess = (token) => {
  return {
    type: 'DEVICE_SUCCESS',
    payload: token,
  };
};
const DeviceError = (error) => {
  return {
    type: 'DEVICE_ERROR',
    payload: error,
  };
};

export const Device = (device_token) => {
  return (dispatch) => {
    dispatch(DeviceRequest());
    dispatch(DeviceSuccess(device_token));
  };
};