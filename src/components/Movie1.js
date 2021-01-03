import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import movieTrailer from 'movie-trailer';
import "./Movie.css";
import Modal from './Modal';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaExternalLinkAlt } from "react-icons/fa";


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

function Movie1({...movie}) {
    const [trailerUrl, setTrailerUrl] = useState('');
    const[titleExpand, setTitleExpand] = useState(false)
    
    const {original_title,poster_path,vote_average, id} = movie;

    const {addMovieToWatchlist, watchlist,openModal} = useContext(GlobalContext);
    
    let storeMovie = watchlist.find(object => object.id === movie.id);

    const buttonDisabled = storeMovie ? true : false;
    const buttonName = storeMovie ? "Added To Watchlist" : "Add to Watchlist +";
    const titleExpandable = original_title.length>17 ? true : false

   

    const handleClick = (movie) =>{
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    openModal();
                
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div className="movie__wrapper">
            <div className="movie">
                <LazyLoadImage 
                  effect="blur"
                  src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} 
                  onClick={() => handleClick(original_title)}
                  alt={original_title}
                />
                {/* <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} alt={original_title}
                onClick={() => handleClick(original_title)}/> */}
                <span className={`movie__average ${setClassVote(vote_average)}`}>{vote_average}</span>
                                  
                <div className="movie__info">
                    <h4>
                        {titleExpandable ? `${original_title.substring(0,12)}...` : original_title}
                        
                           <small>{titleExpand}</small>
                        </h4>
                    <Link className="movie__link" to={`/movie/${id}`} movie={movie} >
                      <FaExternalLinkAlt />
                    </Link>
                </div>
                <button className="btn__add" disabled={buttonDisabled} onClick={
                    () => addMovieToWatchlist(movie)
                }>{buttonName}</button>
            </div>
        { trailerUrl && <Modal title={original_title} trailer={trailerUrl} setUrl={setTrailerUrl}/>}
     

        </div>
    )
}

export default Movie1;
