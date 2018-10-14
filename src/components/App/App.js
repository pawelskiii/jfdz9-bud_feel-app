import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from '../Header/index';

import Footer from '../Footer/index';
import UserPanel from "../UserPanel/index";
import Favourites from "../Favourites/index";
import AddDiet from '../AddDiet/index';
import ContentDiets from '../ContentDiets/index';
import Content from '../Content/index';


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
