const initialState = {
  data: [],
  loading: false,
};

const HistoryTransfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HISTORYTRANSFER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'HISTORYTRANSFER_SUCCESS':
      return {
        ...state,
        loading: false,
        dataHistory: action.payload,
      };
    case 'HISTORYTRANSFERALL_SUCCESS':
      return {
        ...state,
        loading: false,
        dataHistoryAll: action.payload,
      };
    case 'HISTORYTRANSFER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default HistoryTransfer;
