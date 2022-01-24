import React from 'react';
import { useSelector } from 'react-redux';

import Pelicula from './Pelicula';

function Peliculas () {
	const pelis = useSelector(state => state.peliculas);
	
	return (
	<>
	{
		pelis?.map(peli => {
          return <Pelicula title={peli.Title} />
        })
	}
	</>
	)
}

export default Peliculas;