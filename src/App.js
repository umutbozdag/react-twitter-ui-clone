import React from 'react';
import './App.scss';
import { Nav, Home, Search, Trends, WhoToFollow, Footer } from './Components';

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
          <div className="column">
            <Search></Search>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
