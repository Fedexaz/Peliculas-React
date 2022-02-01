import React from 'react';
import { useSelector } from 'react-redux';

import './favoritas.css'

function Favoritas () {
  const favs = useSelector(state => state.favoritas)

  return (
    <div className='cuerpoFavoritas'>
      <h1>Películas Favoritas</h1>
      <div className='contenedorFavoritas'>
        {
          favs.map((e) => {
            return <div key={e.id} className='peliFavorita'>
                <img src={e.poster} alt={e.title}/>
                <h3>{e.title} ({e.year})</h3>
              </div>
          })
        }
      </div>
    </div>
  )
}

export default Favoritas;