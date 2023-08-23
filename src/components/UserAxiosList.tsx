import React, { useEffect, useState } from "react";
import { IUserAxios } from "../models/IUserAxios";
import { UserAxiosService } from "../services/UserAxiosService";

interface IState {
    loading: boolean;
    users: IUserAxios[];
    errorMessage: string;
}

const UserAxiosList = (): JSX.Element => {
const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUserAxios[],
    errorMessage: ''
})

useEffect(() => {
    setState({...state, loading: true});
    UserAxiosService.getAllUsers().then((response) => {
        setState({
            ...state,
            loading: false,
            users: response.data
        })
    }).catch((error) => {
        setState({
            ...state,
            loading: false,
            errorMessage: error.message
        })
    });
}, []);

const {loading, users, errorMessage} = state
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover text-center table-striped">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 &&  users.map(user => {
                                    return(
                                       <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.website}</td>

                                       </tr> 
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default UserAxiosList;