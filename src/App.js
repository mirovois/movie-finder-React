import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
 
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
        </Switch>

      </div>
    
    </BrowserRouter>
  );
}

export default App;
