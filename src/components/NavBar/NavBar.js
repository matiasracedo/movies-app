import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="topnav">
                <NavLink className="link" exact to="/" >Home</NavLink>
                <NavLink className="link" to="/favs" >Favoritas</NavLink>
                <NavLink className="link" to="/about" >About</NavLink>
            </div>
        </header>
    )
}

/*<div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>*/