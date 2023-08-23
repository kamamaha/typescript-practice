import React, {useState} from "react";
import { IUser } from "../models/User";

interface IState{
    user : IUser
}

interface IProps{
    
}

const LoginForm = (): JSX.Element => {

const [state, setState] = useState<IState> ({
        user: {
            username: '',
            password: '',
        }
    })

 const upadateInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setState( {
        user : {
            ...state.user,
            [event.target.name] : event.target.value,
        }
    })
 }  
 
 const login = (event : React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(state.user)
 }
    return(
        <>
        {/* <pre>{JSON.stringify(state.user)}</pre> */}
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-3">
                    <div className="card">
                        <div className="card-header text-center bg-primary text-white">
                            <p className="h4">
                                Login Here
                            </p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="mb-2">
                                    <input
                                    required={true}
                                    name="username"
                                    value={state.user.username}
                                    onChange={upadateInput}
                                    type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                    required={true}
                                    name="password"
                                    value={state.user.password}
                                    onChange={upadateInput}
                                    type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value="Login"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginForm;
