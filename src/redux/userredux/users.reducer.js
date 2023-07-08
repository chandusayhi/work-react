import * as userAction from "./users.action";

export let UserListFeatureKey = 'User-list';

let initialState = {
    loading : false,
    users : [],
    errorMessage : ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userAction.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userAction.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users : action.payload
            };
        case userAction.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            };
        default:return state;
    }
};