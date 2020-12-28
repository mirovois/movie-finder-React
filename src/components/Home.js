import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie1';
import Loading from './Loading';
import './Home.css';

function Home() {
  //  const {isLoading} = useContext(GlobalContext);

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


    const callSearch = (e) =>{
      e.preventDefault();
      setURL(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
      setQuery('');
    };
    return (
        <div className="movie__wrapper" >
            <form style={{marginTop:"3rem"}}>
              <input type="text" id="search" placeholder="Search a movie..." 
              value={query}
              onChange={e =>setQuery(e.target.value)}
              />
              <button className="btn__search" type="submit" onClick={callSearch}>GO</button>
            </form>
      {isError && <div>Oops! Error has occured</div>}

      {isLoading ? (<Loading />) 
      : 
      <div className="movie__container">
      {movies.length>0 &&
        movies.map(movie =>
          <Movie key={movie.id} {...movie} />
      )}
      </div>
      }
        </div>
    )
}

export default Home;
