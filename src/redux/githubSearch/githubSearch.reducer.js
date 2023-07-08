
import * as githubSearchActions from './githubSearch.actions';

export const githubSearchFeatureKey = 'githubSearch';

let initialState = {
    loading : false,
    errorMessage : '',
    profile : {},
    repos : []
};

export  const reducer = (state = initialState, action) => {
    let {type , payload} = action;
    switch(type){
        case githubSearchActions.FETCH_PROFILE_INFO_REQUEST:
            return {
                ...state,
                loading : true
            };
        case githubSearchActions.FETCH_PROFILE_INFO_SUCCESS:
            return {
                ...state,
                loading : false,
                profile: payload
            };
        case githubSearchActions.FETCH_PROFILE_INFO_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        default : return state;
    }
};