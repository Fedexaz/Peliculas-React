import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Movie({ data }) {
  const goto = useNavigate();
  const { Title, Year, imdbID, Poster } = data;
  return (
    <div className='movie-card' onClick={() => goto(`/detalle/${imdbID}`)}>
      <img src={Poster} alt={Title} width='200px' />
      <div className='movie-desc'>
      <div style={{ marginLeft: '5px', marginRight: '5px', marginTop: '5px' }}>{Title} - {Year}</div>
      </div>
    </div>
  )
}
