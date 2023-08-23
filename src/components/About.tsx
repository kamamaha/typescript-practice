import React from 'react'

interface IState {

}


const About = (): JSX.Element => {
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success fw-bold">About us</p>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi enim nulla eos facere suscipit atque debitis ducimus cupiditate recusandae ex perferendis nemo nostrum, omnis quo qui aliquid facilis commodi maxime!s
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <ul className="list-group">
                                <li className="list-group-item">
                                    App Name: <span className='fw-bold'>React Router with TypeScript</span>
                                </li>
                                <li className="list-group-item">
                                    Author: <span className='fw-bold'>Kama</span>
                                </li>
                            
                            </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default About