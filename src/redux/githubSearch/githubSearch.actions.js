import {Axios} from "axios";
import {CLIENT_ID, CLIENT_SECRET} from '../../components/GithubCredentials';

export const FETCH_PROFILE_INFO_REQUEST = 'FETCH_PROFILE_INFO_REQUEST';
export const FETCH_PROFILE_INFO_SUCCESS = 'FETCH_PROFILE_INFO_SUCCESS';
export const FETCH_PROFILE_INFO_FAILURE = 'FETCH_PROFILE_INFO_FAILURE';

export const FETCH_REPO_INFO_REQUEST = 'FETCH_REPO_INFO_REQUEST';
export const FETCH_REPO_INFO_SUCCESS = 'FETCH_REPO_INFO_SUCCESS';
export const FETCH_REPO_INFO_FAILURE = 'FETCH_REPO_INFO_FAILURE';

export const fetchProfileInfo = (githubUser) => {
    return async (dispatch) => {
        try{
            dispatch({type : FETCH_PROFILE_INFO_REQUEST});
            let dataURL = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataURL);
            dispatch({type : FETCH_PROFILE_INFO_SUCCESS , payload : response.data});
        }
        catch (error){
            dispatch({type : FETCH_PROFILE_INFO_FAILURE , payload : error});
        }
    }
}