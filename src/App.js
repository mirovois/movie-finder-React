import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import {Route, Switch} from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
 
 function App() {
  return (
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />         
            </Route>
            <Route exact path="/watchlist">
              <Watchlist />         
            </Route>
            <Route exact path='/movie/:id'
            children={<SingleMovie />}
            />
          </Switch>
        </div>
  );
}

export default App;
