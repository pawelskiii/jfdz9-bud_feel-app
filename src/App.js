import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './Header';

import Footer from './Footer';
import UserPanel from "./UserPanel";
import Favourites from "./Favourites";
import AddDiet from './AddDiet';
import ContentDiets from './ContentDiets';
import Content from './Content';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Header/>
                  <Route path="/"  exact component={Content}/>
                  <Route path="/UserPanel" exact component={UserPanel}/>
                  <Route path="/Favourites" exact component={Favourites}/>
                  <Route path="/Diets" component={ContentDiets}/>
                  <Route path="/AddDiet" exact component={AddDiet}/>
                  <Footer/>
              </div>
          </Router>
      </div>
    );
  }

}

export default App;
