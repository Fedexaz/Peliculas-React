import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const goto = useNavigate();

  return (
    <nav className='navbar'>
      <span className='nav-brand' onClick={() => goto('/')}>Movies app</span>
      <span className='nav-item' onClick={() => goto('/')}>Inicio</span>
      <span className='nav-item' onClick={() => goto('/favoritos')}>Favoritos</span>
    </nav>
  )
}
