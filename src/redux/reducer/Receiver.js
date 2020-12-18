const initialState = {
  data: [],
};

export const Receiver = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'RECEIVER_REQUEST':
      return {
        ...state,
      };
    case 'RECEIVER_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'RECEIVER_ERROR':
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default Receiver;
