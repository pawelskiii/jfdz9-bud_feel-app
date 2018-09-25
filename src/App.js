import React, { Component } from 'react';
import './App.css';

import Header from './Header/index';
import Footer from './Footer/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Footer/>
      </div>
    );
  }
}

export default App;
