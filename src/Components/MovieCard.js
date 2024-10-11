import React from 'react';
import { IMG_CDN_URL } from '../Utils/constants';

const MovieCard = ({key,poster_path}) => {
  return (
    <div className='relative transform transition duration-300 hover:scale-105'>
      <div className='w-48 pr-4'>
        <img className="rounded-lg" alt='Movie Card' src={IMG_CDN_URL + poster_path}/>
      </div>
    </div>
  )
}

export default MovieCard
