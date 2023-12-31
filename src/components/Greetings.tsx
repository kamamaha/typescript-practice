import React, {useState} from "react";

interface IState{
    message: string;
}

const Greetings = (): JSX.Element => {
const [state, setState] = useState<IState>({
    message: "Hello"
})

const changeMessage = (greet : string):void => {
    setState({
        message: greet
    });
}
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3 display-3">{state.message}</p>
                            <button className="btn btn-success m-1" onClick={() => changeMessage("Good Morning")}>Good Morning</button>
                            <button className="btn btn-warning m-1" onClick={() => changeMessage("Good Afternoon")}>Good Afternoon</button>
                            <button className="btn btn-danger m-1" onClick={() => changeMessage("Good Evening")}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Greetings;
