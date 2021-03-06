import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Years from './components/Years';



class App extends Component {
  render() {
    return (
      <div>     
          <Header />

            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/home' component={Home}/>
              <Route path='/game1' component={Game1}/>
              <Route path='/game2' component={Game2}/>
              <Route path='/years' component={Years}/>
              <Route path='/about' component={About}/>
            </Switch>
          <Footer />  
      </div>
   
    );
  }
}

export default App;
