import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Principal/Navbar';
import MovieDetail from './components/Principal/MovieDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/favoritos' element={<Favorites />} />
        <Route exact path='/detalle/:id' element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App;

//"http://www.omdbapi.com/?s=" + titulo + "&apikey=be6ab966" <----- RUTA PARA PELICULAS