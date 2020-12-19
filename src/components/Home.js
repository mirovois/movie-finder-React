import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie1';
import YouTube from 'react-youtube';

function Home() {
   const [isLoading, setIsLoading] = useState(false);
   const [URL,setURL] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
   const [isError, setIsError] = useState(false);
   const [movies, setMovies] = useState([]);
   const [query, setQuery] = useState('');
  //  const [trailerUrl, setTrailerUrl] = useState('');
   
    useEffect(() =>{
      const fetchData = async() =>{
        setIsError(false);
        setIsLoading(true);
         try {
           const result = await axios(URL);
           console.log(result.data.results)
           setMovies(result.data.results)
         }
         catch(error){
           setIsError(true)
         }
         setIsLoading(false)
      };
      fetchData()
    },[URL]);

      // const opts = {
      //   height:"390",
      //   width:"100%",
      //   playerVars:{
      //     // https://developers.google.com/youtube/player_parameters
      //     autoplay:1
      //   }
      // }

    const callSearch = (e) =>{
      e.preventDefault();
      setURL(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
      setQuery('');
    };
    return (
        <div>
            <form>
              <input type="text" id="search" placeholder="Search a movie" 
              value={query}
              onChange={e =>setQuery(e.target.value)}
              />
              <button type="submit" onClick={callSearch}>Search</button>
            </form>
      {isError && <div>Oops! Error has occured</div>}

      {isLoading ? (<div>Loading...</div>) 
      : 
      <div className="movie__container">
      {movies.length>0 &&
        movies.map(movie =>
          <Movie key={movie.id} {...movie} />
      )}
      </div>
      }
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>
      } */}
        </div>
    )
}

export default Home
