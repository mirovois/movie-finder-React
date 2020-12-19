import React from 'react';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import "./Header.css"

const Header = (props) => {
    const links = [
        {id:1, title:"Home", link:"/"},
        {id:2, title:"WatchList", link:"/watchlist"}
    ];
    const{watchlist} = useContext(GlobalContext);
    return (
        <header>
            <h2>Find Movie</h2>
            <nav>
                <ul>
                    {links.map(link =>
                        (<NavLink  key={link.id} exact to={link.link} className="header__link" activeClassName="active__link">
                            <h2>{link.title}</h2>
                        </NavLink> )
                    )}
                    {watchlist.length>0 ? (
                        <span className="watchlist__count">{watchlist.length}</span>
                    ) : ""}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
