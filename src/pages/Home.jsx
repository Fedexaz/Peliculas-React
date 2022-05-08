import React, { useState, useEffect } from 'react';
import { getRandomMovie } from '../services/home.service';
import { FcSearch } from 'react-icons/fc';
import Loader from '../components/Extras/Loader';
import Footer from '../components/Extras/Footer';
import Movie from '../components/Principal/Movie';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => document.title = 'Movies app - Inicio', []);
  useEffect(() => {
    loadRandomMovie();
    return () => {
      setMovies([]);
      setLoadingMovies([]);
    };
  }, []);

  const loadRandomMovie = async () => {
    try {
      setMovies(await getRandomMovie());
      setLoadingMovies(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='jumbotron'>
        <div className='buscador-container'>
          <input className='busqueda-pelis' type="text" name="title" id="title" placeholder='Ingresa algún nombre de película' />
          <button className='busqueda-pelis-button'><FcSearch /></button>
        </div>
      </div>
      <div className='container'>
        <div className='movies-container'>
          {
            loadingMovies ?
              <Loader />
              :
              movies.length ?
                movies.map(el => <Movie key={el.imdbID} data={el} />)
                :
                <div>No hay peliculas para ver :( (recarga la página)</div>
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
