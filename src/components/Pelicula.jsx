import React from 'react';

function Pelicula ({title, img}) {
	return (
	  <span>
		<img src={img} alt={title}/>
	    <p>{title}</p>
	  </span>
	)
}

export default Pelicula;