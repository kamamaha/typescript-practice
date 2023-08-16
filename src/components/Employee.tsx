import React, { useState } from "react";

interface IProps {

}
interface IState {
    name: string;
    age: number;
    title: string;
}
const Employee = ({}:IProps): JSX.Element => {
 const [state, setState] = useState<IState>({
    name: "Andrzej",
    age: 31,
    title: "Rollo"
 });
    return(
        <>
        <h3>Employee Component</h3>
        <ul className="list-group">
            <li className="list-group-item">
                Name : {state.name}
            </li>
            <li className="list-group-item">
                Age : {state.age}
            </li>
            <li className="list-group-item">
                Title : {state.title}
            </li>
        </ul>
        </>
    )
}

export default Employee