import React, { Component } from 'react';
import './App.scss';
import { Nav, Home, Search, Trends, WhoToFollow, Footer } from './Components';
const tweets = require('./db.json');

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="column nav">
              <Nav></Nav>
            </div>
            <div className="column home">
              <Home tweets={tweets}></Home>
            </div>
            <div className="column right-side">
              <Search></Search>
              <Trends></Trends>
              <WhoToFollow tweets={tweets}></WhoToFollow>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
