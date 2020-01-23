import React from 'react';
import './App.scss';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column nav">
            <Nav></Nav>
          </div>
          <div className="column home">
            <Home></Home>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
