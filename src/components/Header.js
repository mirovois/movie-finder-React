import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"

const Header = (props) => {
    return (
        <header>
            <h2>Find Movie</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/watchlist">Watch List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
