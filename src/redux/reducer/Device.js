const initialState = {
  token: [],
};

export const Device = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DEVICE_REQUEST':
      return {
        ...state,
      };
    case 'DEVICE_SUCCESS':
      return {
        ...state,
        token: action.payload,
      };
    case 'DEVICE_ERROR':
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default Device;
