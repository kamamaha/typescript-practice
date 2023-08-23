import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { IUserAxios } from '../models/IUserAxios';
import { UserAxiosService } from '../services/UserAxiosService';

interface URLParams {
    id: string;
}
interface IState {
    loading: boolean;
    user: IUserAxios;
    errorMessage: string;
}


const UserDetails = (): JSX.Element => {

    const {id} = useParams<URLParams | any>();
    const [state, setState] = useState<IState>({
        loading: false,
        user: {} as IUserAxios,
        errorMessage: ''
    })

    useEffect(() => {
        if(id){
            UserAxiosService.getUser(id).then((response) => {
                setState({
                    ...state,
                    loading: false,
                    user: response.data
                })
            }).catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                })
            })
        }
        
    }, [id])

 let {loading, user, errorMessage} =   state; 
    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">User Details</p>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, expedita voluptatem accusantium ratione consequuntur iure repellendus fuga pariatur voluptas minus, perspiciatis fugit, nostrum incidunt quo beatae sunt voluptatibus modi animi!
                        </p>
                    </div>
                </div>
                {
                    Object.keys(user).length > 0 && 
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name: <span className='fw-bold'>{user.name}</span>
                                </li>
                                <li className="list-group-item">
                                    Phone: <span className='fw-bold'>{user.phone}</span>
                                </li>
                                <li className="list-group-item">
                                    Email: <span className='fw-bold'>{user.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Company: <span className='fw-bold'>{user.company.name}</span>
                                </li>
                                <li className="list-group-item">
                                    City: <span className='fw-bold'>{user.address.city}</span>
                                </li>
                                <li className="list-group-item">
                                    Zip code: <span className='fw-bold'>{user.address.zipcode}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                <div className="row mt-3">
                    <div className="col">
                        <Link to={'/'} className="btn btn-success">Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails