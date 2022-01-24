import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
    return(
    <>
    <nav className="navBar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/favoritas/">Favoritas</NavLink>
    </nav>
    </>
    )
}

export default NavBar;