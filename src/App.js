import React, { Component } from 'react';
import './App.css';

import Header from './Header/index';
import Sidebar from './Sidebar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Sidebar />
      </div>
    );
  }
}

export default App;
