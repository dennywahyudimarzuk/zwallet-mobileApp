const initialState = {
  data: [],
};

export const Transfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRANSFER_REQUEST':
      return {
        ...state,
      };
    case 'TRANSFER_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'TRANSFER_AMOUNT_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'TRANSFER_ERROR':
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default Transfer;
