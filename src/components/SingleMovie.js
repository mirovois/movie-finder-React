import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import movieTrailer from 'movie-trailer';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import Modal from './Modal';
import { BsCameraVideoFill } from "react-icons/bs";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import '../../node_modules/react-lazy-load-image-component/src/effects/blur.css';
import Loading from './Loading';
import './SingleMovie.css';

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

function SingleMovie() {
    const {id} = useParams();
    // const {original_title,poster_path,vote_average} = movie;

    const {addMovieToWatchlist, watchlist,openModal} = useContext(GlobalContext);

    
    
    const[readMore, setReadMore] = useState(false);
    const[isLoading, setIsLoading] = useState(false);
    const[movie, setMovie] = useState('');
    const [trailerUrl, setTrailerUrl] = useState('');
    
    let storeMovie = watchlist.find(object => object.id === movie.id);
    const buttonDisabled = storeMovie ? true : false;
    const buttonName = storeMovie ? "Added To Watchlist" : "Add to Watchlist +";

    useEffect(() =>{
        setIsLoading(true);
        const getMovie = async() =>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
                const result = await response.json();
                setMovie(result);
                console.log(result.original_title);
            }
            catch(error){
                console.log(error);
            }
            setIsLoading(false);
        };
        getMovie()
    },[id])

    const handleClick = (mov) =>{
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(mov || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    openModal();
                
                })
                .catch((error) => console.log(error))
        }
    }
    return (
        <div className="main__wrapper">
            {isLoading ? <Loading /> :
            (

            <article className="single__movie"> 
                    <div className="movie__image">
                        <LazyLoadImage 
                            effect="blur"
                            src={movie.poster_path ? (IMG_API + movie.poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'}
                            alt={movie.original_title}
                            height="300px"
                            width="300px"
                        />
                        {/* <img src={movie.poster_path ? (IMG_API + movie.poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} alt={movie.original_title} /> */}
                    </div>              
                <footer>
                    <div className="single-movie__info">
                    <h4>{movie.original_title}</h4>
                    <h4 className={`movie__rating ${setClassVote(movie.vote_average)}`}>{movie.vote_average}</h4>
                    </div>
                    <hr/>
                    <p>{movie.overview}</p>
                    <div className="action__section">
                        <button className="btn__addList"  disabled={buttonDisabled} onClick={
                                () => addMovieToWatchlist(movie)
                            }>
                        {buttonName}
                        </button>
                        <button className="btn__watch" onClick={() =>handleClick(movie.original_title)}>
                            
                            <span>Watch trailer</span>
                            <span className="trailer__icon"><BsCameraVideoFill /></span>
                            </button>

                    </div>
                </footer>
        { trailerUrl && 
        <Modal title={movie.original_title} trailer={trailerUrl} setUrl={setTrailerUrl}/>}
        </article>
            )}
        </div>
    )
}

export default SingleMovie;
