
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";


const Browse = ()=>
{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const gptSelector = useSelector((store)=> store.gpt.GPTSearchEnabled)

        return (
            <div>
                <Header/>
                { gptSelector ? 
                (<GPTSearch/>) : 
                (
                <>
                <MainContainer/>
                <SecondaryContainer/>
                </>)
                    
                }
               
            </div>
        )
    }
    export default Browse;