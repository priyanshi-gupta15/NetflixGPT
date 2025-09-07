// import { useDispatch } from "react-redux";
// import { setNowPlaying } from "../store/movieSlice";
// import { useEffect } from "react";
// import { API_Options } from "../utils/constant";
// import { BASE_URL } from "../utils/constant";

// //fetch tmdb api and update the store
// const useNowPlaying = () => {
//   const dispatch = useDispatch();

  

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(
//         `${BASE_URL}/movie/now_playing?page=1`,
//         API_Options
//       );
//       const data = await response.json();
//       console.log(data.results);
//       dispatch(setNowPlaying(data.results));
//     };
//     getData();
//   }, [dispatch]);
// }

// export default useNowPlaying;

// src/hooks/useFetchMovies.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setNowPlaying,
  setPopular,
  setTopRated,
  setUpcoming,
} from "../store/movieSlice";
import { BASE_URL, API_OPTIONS } from "../utils/constant";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoints = [
          { url: `${BASE_URL}/movie/now_playing?page=1`, action: setNowPlaying },
          { url: `${BASE_URL}/movie/popular?page=1`, action: setPopular },
          { url: `${BASE_URL}/movie/top_rated?page=1`, action: setTopRated },
          { url: `${BASE_URL}/movie/upcoming?page=1`, action: setUpcoming },
        ];

        for (const { url, action } of endpoints) {
          const res = await fetch(url, API_OPTIONS);
          const data = await res.json();
          
         
          

          if (data.results) {
            dispatch(action(data.results));
          } else {
            console.error("Error fetching:", data);
          }
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useFetchMovies;
