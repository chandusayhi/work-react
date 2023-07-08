import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as UserListAction from "../redux/userredux/users.action";
import * as UserListReducer from "../redux/userredux/users.reducer";

let UserList = () =>{

    let dispatch = useDispatch();

    let CLickUserList = ()=> {
       /* dispatch(UserListAction.fetchUsers())*/
        dispatch(UserListAction.fetchUsersList());
    };

    let userInfo  = useSelector((state) => {
        return state[UserListReducer.UserListFeatureKey];
    });

    let {loading, users, errorMessage} = userInfo;
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">User List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quas!</p>
                            <button onClick={CLickUserList} className="btn btn-success btn-sm">Get Users</button>


                        </div>
                    </div>
                </div>

            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-hover text-center">
                                <thead className="bg-primary text-white">
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIl</th>
                                <th>CITY</th>
                                <th>PH NO</th>
                                <th>WEBSITE</th>
                                </thead>
                                <tbody>
                                {
                                    users.length > 0 ?
                                        <React.Fragment>
                                            {
                                                users.map((user) => {
                                                    return(
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.city}</td>
                                                            <td>{user.website}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default UserList;