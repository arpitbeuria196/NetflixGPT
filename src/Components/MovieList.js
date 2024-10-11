import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-white py-2 px-2">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-6 py-1 ">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
          ))
        ) : (
          <p className="text-gray-400">No movies available</p>
        )}
      </div>
    </div>
  )
}

export default MovieList
