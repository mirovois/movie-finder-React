import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
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
    const[loading, setLoading] = useState(false);
    const[movie, setMovie] = useState('');
    
    let storeMovie = watchlist.find(object => object.id === movie.id);
    const buttonDisabled = storeMovie ? true : false;
    const buttonName = storeMovie ? "Added To Watchlist" : "Add to Watchlist";

    useEffect(() =>{
        // setLoading(true);
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
        };
        getMovie()
    },[id])

    if(!movie) {
        return <h2>There is no movie for displaying</h2>
    }

    return (
        <divm className="main__wrapper">
            <article className="single__movie">
                {/* <h2>{movie.original_title}</h2> */}
               
                    <img src={movie.poster_path ? (IMG_API + movie.poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} alt={movie.original_title} />
                
                <footer>
                    <div className="single-movie__info">
                    <h4>{movie.original_title}</h4>
                    <h4 className={`movie__rating ${setClassVote(movie.vote_average)}`}>${movie.vote_average}</h4>
                    </div>
                    <hr/>
                    <p>{movie.overview}</p>
            <button className="btn__action"  disabled={buttonDisabled} onClick={
                    () => addMovieToWatchlist(movie)
                }>
            {buttonName}
            </button>
                </footer>
        </article>

        </divm>
    )
}

export default SingleMovie;
