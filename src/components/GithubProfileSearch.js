import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as githubSearchActions from '../redux/githubSearch/githubSearch.actions';
import * as githubSearchReducer from '../redux/githubSearch/githubSearch.reducer';

const GithubProfileSearch = () => {
    let dispatch = useDispatch();

    let githubSearchInfo = useSelector((state) => {
        return state[githubSearchReducer.githubSearchFeatureKey];
    });

    let {profile , repos} = githubSearchInfo;

    let [githubUser , setGithubUser] = useState('');

    let submitSearch = (event) => {
        event.preventDefault();
        dispatch(githubSearchActions.fetchProfileInfo(githubUser));
        /*dispatch(githubSearchActions.fetchReposInfo(githubUser));*/
    };

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Github Profile Search App</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem eum ex expedita facere minima numquam quia repellat soluta veniam!</p>
                            <form className="form-inline" onSubmit={submitSearch} >
                                <div className="form-group">
                                    <input type="text"
                                           value = {githubUser}
                                           className="form-control" placeholder="Github Username"
                                           onChange={e => setGithubUser(e.target.value)} />
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-primary btn-sm" value="search"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default GithubProfileSearch;