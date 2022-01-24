export function mostrarPeliculas (titulo) {
	return function (dispatch){
	  fetch("http://www.omdbapi.com/?s=" + titulo + "&apikey=be6ab966")
	  .then(response => response.json())
	  .then(data => dispatch({ type: "MOSTRAR_PELICULAS", payload: data}))
	  .catch(e => console.log(e))
    }
}

export function verDetallePelicula (payload) {
	return {
		type: 'DETALLE_PELICULA',
		payload
	}
}

export function agregarFavoritas (payload) {
	return {
		type: 'AGREGAR_FAVORITA',
		payload
	}
}

export function borrarFavoritas (payload) {
	return {
		type: "ELIMINAR_FAVORITA",
		payload
	}
}