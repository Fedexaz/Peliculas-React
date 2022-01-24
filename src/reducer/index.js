import { mostrarPeliculas, verDetallePelicula, agregarFavoritas, borrarFavoritas } from '../actions/'

const initialState = {
	peliculas: [],
	favoritas: [],
	detallePeli: {}
}

export default function reducer (state = initialState, action) {
	switch(action.type) {
      case "MOSTRAR_PELICULAS":{
	    return {
			...state,
			peliculas: action.payload
	    }
      }
      
      case "DETALLE_PELICULA":{
	    return {
			...state,
			detallePeli: action.payload
	    }
      }

      case "AGREGAR_FAVORITA":{
	    return {
			...state,
			favoritas: [...state.favoritas, action.payload]
	    }
      }
	  
	  case "ELIMINAR_FAVORITA":{
	    return {
			...state,
			favoritas: state.favoritas.filter(p => p.id !== action.payload)
	    }
      }
      
      default: return state;
	}
}
