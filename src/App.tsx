import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Employee from './components/Employee';
import Counter from './components/Counter';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App component</p>
              <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo accusamus sapiente fugiat? Cupiditate animi aut quas aliquid dicta provident excepturi sapiente. Exercitationem nulla consequatur molestiae ipsam voluptate, illo laborum perspiciatis!</p>
              <button className='btn btn-success btn-sm'><i className='fa fa-book'></i> Read more</button>
              
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Customer name={"Kama"} age={31} title={"abc"}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Employee/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Counter/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Greetings/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;