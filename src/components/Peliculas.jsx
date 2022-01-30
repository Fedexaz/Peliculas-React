import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mostrarPeliculas, agregarFavoritas } from '../actions/';

import Pelicula from './Pelicula';

function Peliculas () {
	const pelis = useSelector(state => state.peliculas);
	const dispatch = useDispatch();
	
	let [inputPelis, setInputPelis] = useState('');
	let [addFav, setAddFav] = useState(false);
	let [lastAddedFav, setLastAddedFav] = useState('');
	
	function handleChange (e) {
		setInputPelis (e.target.value)
	}
	
	function handleSubmit (e) {
		e.preventDefault();
		dispatch (mostrarPeliculas (inputPelis))
	}

	function addFavourites(e){
		setAddFav(true)
		setLastAddedFav(e.target.id)
		dispatch(agregarFavoritas(e.target.id))
		setTimeout(() => { setAddFav(false) }, 3000)
	}
	
	return (
	<>
	<h1>Películas</h1>
	<form onSubmit={e=>handleSubmit(e)}>
		<input type="text" value={inputPelis} onChange={e=>handleChange (e)} placeholder="Ingresa el título de la película a buscar..."/>
		<button type="submit">Buscar</button>
	</form>
    <hr />
    <h1>Resultados de '{inputPelis}'</h1>
	{addFav ? <p>'{lastAddedFav}' agregada a Favoritos!</p> : null}
    {
		pelis?.map(peli => {
        	return (
				<div key={peli.imdbID}>
            	<Pelicula title={peli.Title} />
            	<button onClick={e => addFavourites(e)} id={peli.Title}>⭐</button>
            	</div>
          	)
        })
	}
	</>
	)
}

export default Peliculas;