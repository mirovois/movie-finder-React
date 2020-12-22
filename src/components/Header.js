import React from 'react';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import { BiCameraMovie } from 'react-icons/bi';
import "./Header.css"

const Header = (props) => {
    const links = [
        {id:1, title:"Home", link:"/"},
        {id:2, title:"WatchList", link:"/watchlist"}
    ];
    const{watchlist} = useContext(GlobalContext);
    return (
        <header>
            <h2 className="header__title">MovieApp</h2>
            <nav>
                <ul>
                    {links.map(link =>
                        (<NavLink  key={link.id} exact to={link.link} className="header__link" activeClassName="active__link">
                            <h2>{link.title}</h2>
                        </NavLink> )
                    )}
                    {watchlist.length>0 ? (
                        <div className="counter__container">
                            <BiCameraMovie className="counter__icon"/>
                            <span className="watchlist__count">{watchlist.length}</span>

                        </div>
                    ) : ""}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
