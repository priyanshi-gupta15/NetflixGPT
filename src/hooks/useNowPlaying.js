import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constant";

//fetch tmdb api and update the store
const useNowPlaying = () => {
  const dispatch = useDispatch();

  

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_Options
      );
      const data = await response.json();
      console.log(data.results);
      dispatch(setNowPlayingMovies(data.results));
    };
    getData();
  }, [dispatch]);
}

export default useNowPlaying;
