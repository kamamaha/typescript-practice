import React, {useState} from "react";
import { IUser } from "../models/IUser";

interface IState{
    users : IUser[]
}

interface IProps{
    
}

const UserList = (): JSX.Element => {
const [state, setState] = useState<IState>({
    users : [
        {
            sno : "AAA101",
            name : "Kama",
            age : 31,
            designation : "Sofrware Engineer",
            company : "abc"
        },
        {
            sno : "AAA102",
            name : "Andrzej",
            age : 35,
            designation : "Sofrware Engineer",
            company : "abc"
        },
        {
            sno : "AAA103",
            name : "Rollo",
            age : 8,
            designation : "Sofrware Engineer",
            company : "abc"
        }
    ]
})

    return(
        <>
        <pre>{JSON.stringify(state.users)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3">User List</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover shadow-lg">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>sno</th>
                                    <th>name</th>
                                    <th>age</th>
                                    <th>designation</th>
                                    <th>company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.length > 0 &&
                                    state.users.map(user => {
                                        return(
                                            <tr key={user.sno}>
                                                <td>{user.sno}</td>
                                                <td>{user.name}</td>
                                                <td>{user.age}yrs</td>
                                                <td>{user.designation}</td>
                                                <td>{user.company}</td>
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

export default UserList;
