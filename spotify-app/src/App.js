import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Containers/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edisdftsdf <code>src/App.js</code> and save to reload. sssss
        </p>
        <Main />
      </div>
    );
  }
}

export default App