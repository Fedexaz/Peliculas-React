import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

function NavBar () {
    return(
    <>
    <nav className="navBar">
      <NavLink to="/" className="navLink">Inicio</NavLink>
      <NavLink to="/favoritas/" className="navLink">Favoritas</NavLink>
    </nav>
    </>
    )
}

export default NavBar;