import React, {useState} from 'react';

import "./Search.css";

const Search = (props) => {
    const[searchValue, setSearchValue] = useState("");

    // const handleSearch = (e) =>{
    //     setSearchValue(e.target.value);
    // }
    // const resetInputField =() => {
    //     setSearchValue("");
    // }

    const callSearchFunction = () => {
        // e.preventDefault();
        props.searchMovie(searchValue);
        // console.log(searchValue);
        // resetInputField();
    } 


    console.log(callSearchFunction());
    return (
        <form>
            <input type="text" placeholder="find me" 
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            />
            <button type="submit" onClick={callSearchFunction}>Search</button>
        </form>
    )
}

export default Search
