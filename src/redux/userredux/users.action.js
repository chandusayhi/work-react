import axios, {Axios} from "axios";

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export let fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUEST
    }
};

export let fetchUserSuccess = (users) => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
};

export let fetchUserFailure = (error) => {

    return {
        type : FETCH_USER_ERROR,
        payload : error
    }
};



export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUserRequest());
      let dataUrl = 'https://jsonplaceholder.typicode.com/users';
      axios.get(dataUrl).then((response) => {
          dispatch(fetchUserSuccess(response.data));
      }).catch((error) => {
          dispatch(fetchUserFailure(error))
      });
    };
};


export const fetchUsersList = () => {
    return async (dispatch) => {
        dispatch({type : FETCH_USER_REQUEST});
        try{
            let dataUrl = 'https://jsonplaceholder.typicode.com/users';
            let response = await axios.get(dataUrl);
            dispatch({type : FETCH_USER_SUCCESS, payload : response.data});

        }
        catch(error) {
            dispatch({type : FETCH_USER_ERROR, payload : error});
        }

    };
};