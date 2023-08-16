import React from "react";

interface IProps{
    name: string;
    age: number;
    title: string;
}

const Customer = ({name, age, title}:IProps): JSX.Element => {
    console.log(name, age, title)
    return(
        <>
            <h2>Customer Component</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Name: {name}
                </li>
                <li className="list-group-item">
                    Age: {age}
                </li>
                <li className="list-group-item">
                    Title: {title}
                </li>
            </ul>
        </>
    )
   
};

export default Customer;