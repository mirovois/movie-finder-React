import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import WatchlistCard from './WatchlistCard';

function Watchlist() {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div>
           {watchlist.length > 0 ? (
               <div>
               <h1 style={{marginTop:"4rem"}}>This is my watchlist</h1> 
               <div className="movie__container">
               
                {watchlist.map(movie =>(
                    <WatchlistCard key={movie.id}  movie={movie}/>
                )
                )}
                </div>

               </div>)
            : (
                <h1 style={{marginTop:"4rem"}}>There is no movies in watchlist</h1>
            )}
        </div>
    )
}

export default Watchlist
