import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import WatchlistCard from './WatchlistCard';

function Watchlist() {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div>
           <h1>This is my watchlist</h1> 
           {watchlist.length > 0 ? (
            <div className="movie__container">
               
                {watchlist.map(movie =>(
                    <WatchlistCard key={movie.id}  movie={movie}/>
                )
                )}
            </div>) 
            : (
                <h2>There is no movies in watchlist</h2>
            )}
        </div>
    )
}

export default Watchlist
