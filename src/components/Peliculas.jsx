import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mostrarPeliculas, agregarFavoritas } from '../actions/';

import "./pelicula.css"

import Pelicula from './Pelicula';

function Peliculas () {
	const pelis = useSelector(state => state.peliculas);
	const dispatch = useDispatch();
	
	let [inputPelis, setInputPelis] = useState('');
	let [addFav, setAddFav] = useState(false);
	let [lastAddedFav, setLastAddedFav] = useState('');
	let [added, setAdded] = useState('');
	let [isLoading, setIsLoading] = useState(false)

	useEffect(()=>{
		if(pelis){
			setIsLoading(false)
		}
		return function (){
			clearTimeout(added)
		}
	}, [added, pelis])

	function handleChange (e) {
		setInputPelis (e.target.value)
	}
	
	function handleSubmit (e) {
		e.preventDefault();
		dispatch(mostrarPeliculas (inputPelis))
		setIsLoading(true)
	}

	function addFavourites(e, data){
		setAddFav(true)
		setLastAddedFav(data.title)
		dispatch(agregarFavoritas(data))
		setAdded(setTimeout(() => { setAddFav(false) }, 3000))
	}
	
	return (
	<div className='pelisContainer'>
	<h1>¡Buscá una peli!</h1>
	<form onSubmit={e=>handleSubmit(e)}>
		<input className='busqueda' type="text" value={inputPelis} onChange={e=>handleChange (e)} placeholder="Ingresa el título de la película a buscar..."/>
		<button className='botonBusqueda' type="submit">Buscar</button>
	</form>
    <hr />
	{/*addFav ? <p>'{lastAddedFav}' agregada a Favoritos!</p> : null*/}
    {
		isLoading ? 
		<div className="lds-facebook"><div></div><div></div><div></div></div>
		:
		<div>
			<h2>Resultados de {inputPelis}</h2>
			{
			pelis?.map(peli => {
				return (
					<div key={peli.imdbID} className="peli">
					<Pelicula title={peli.Title} img={peli.Poster} />
					<button className='botonFav' onClick={e => addFavourites(e, {id: peli.imdbID, title: peli.Title, poster: peli.Poster, year: peli.Year})}>⭐</button>
					</div>
			  	)
			})
			}
		</div>
	}
	</div>
	)
}

export default Peliculas;