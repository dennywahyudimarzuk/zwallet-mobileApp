import Axios from 'axios';
import {BASE_URL} from '../../utils';

const SearchRequest = () => {
  return {
    type: 'SEARCH_REQUEST',
  };
};

const SearchSuccess = (data) => {
  return {
    type: 'SEARCH_SUCCESS',
    payload: data,
  };
};
const SearchError = (error) => {
  return {
    type: 'SEARCH_ERROR',
    payload: error,
  };
};

export const GetSearch = (token, search, limit) => {
  return (dispatch) => {
    dispatch(SearchRequest());
    if (search.length > 1) {
      return Axios({
        method: 'GET',
        url: `${BASE_URL}/api/v1/users/search/query?q=${search}&limit=${limit}`,
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((res) => {
          const data = res.data.data;
          console.log(res);
          console.log('ini search redux1');
          dispatch(SearchSuccess(data));
        })
        .catch((err) => {
          const message = err.message;
          dispatch(SearchError(message));
        });
    } else {
      return Axios({
        method: 'GET',
        url: `${BASE_URL}/api/v1/users/search?limit=${limit}`,
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((res) => {
          const data = res.data.data;
          dispatch(SearchSuccess(data));
        })
        .catch((err) => {
          const message = err.message;
          dispatch(SearchError(message));
        });
    }
  };
};
