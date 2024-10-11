import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../Utils/movieSlice';


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
      getMovieVideos();
    },[]);
  
    const getMovieVideos = async () =>
    {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await data.json();
      //console.log(json);
  
      const filterData = json.results.filter((videos)=> videos.type == "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    }
  
  
}

export default useMovieTrailer
