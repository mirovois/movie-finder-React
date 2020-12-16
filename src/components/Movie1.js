import React from 'react';

import "./Movie.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setClassVote = (vote) =>{
    if(vote >=8) {
        return "orange"
    } else if (vote>=6) {
        return "green"
    } else {
        return "red"
    }
}

function Movie1({original_title,poster_path,overview,vote_average}) {

    return (
        <div className="movie__wrapper">
            <div className="movie">
                <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} alt={original_title}/>
                <div className="movie__info">
                    <h4>{original_title}</h4>
                    <span className={`movie__average ${setClassVote(vote_average)}`}>{vote_average}</span>
                </div>
                {/* <div className="movie__overview">
                    <p>{overview}</p>
                </div> */}
                <button className="btn__add">Add to watchlist</button>
            </div>

        </div>
    )
}

export default Movie1;
