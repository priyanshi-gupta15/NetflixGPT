// src/hooks/useMovieTrailer.js
import { useEffect, useState } from "react";

const TMDB_API_KEY = "953b02cfa687b4c6b7e8feadcceb14a5"; // 🔑 Replace with your TMDB key

const useMovieTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
        );
        const data = await res.json();

        const trailers = data.results.filter(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return trailerKey;
};

export default useMovieTrailer;
