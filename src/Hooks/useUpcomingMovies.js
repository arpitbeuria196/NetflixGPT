import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constants';
import { addUpcomingMovies} from '../Utils/movieSlice';

const useUpcomingMovies = () => 
{
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>
  {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));

  }
}

export default useUpcomingMovies
