import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalContext'
import SingleMovie from './components/SingleMovie';
 
 function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(true);
  //      try {
  //       const results = await axios(url);
  //       console.log(results.data);
  //       setMovies(results.data);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [url]);

  // const callSearch = (e) =>{
  //   e.preventDefault();
  //   setUrl(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${query}`);
  //   setQuery("");
  // }



  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />         
            </Route>
            <Route exact path="/watchlist">
              <Watchlist />         
            </Route>
            <Route exact path='/movie/:id'>
              <SingleMovie />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
