export function mostrarPeliculas () {
	return {
		
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