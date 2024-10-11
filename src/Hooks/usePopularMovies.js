import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constants';
import { addPopularMovies } from '../Utils/movieSlice';


const usePopularMovies = () => 
{
 const dispatch = useDispatch();
 const fetchData = async () =>
  {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));

  }
  useEffect(()=>{
    fetchData();
  },[])
  
}

export default usePopularMovies
