// import Signup from "../../screens/Signup";

const initialState = {
  data: {
    name: '',
    email: '',
    password: '',
    // pin: '',
  },
  loading: false,
  isSuccess: false,
  message: '',
};

const Signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: true,
        message: action.payload,
      };
    case 'SIGNUP_FAILED':
      return {
        ...state,
        loading: false,
        isSuccess: false,
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Signup