import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Menu />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button>{process.env.REACT_APP_SECRET_CODE}</Button>
        </p>
      </div>
    );
  }
}

export default App;
