import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    watchlist:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
};

// create context
export const GlobalContext = createContext(initialState);

// provider component  - allows to access GC from other components

export const GlobalProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() =>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    },[state])

    // actions - with actions we tell what to do when the ation is triggered
    const addMovieToWatchlist = movie =>{
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST", payload: movie});
    };
    const removeMovieFromWatchList = id =>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCH_LIST", payload:id})
    }

    return (
        <GlobalContext.Provider value={{watchlist:state.watchlist,addMovieToWatchlist,removeMovieFromWatchList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}