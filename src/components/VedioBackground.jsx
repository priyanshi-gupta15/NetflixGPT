// src/components/VideoBackground.jsx
import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const VideoBackground = ({ movieId, fallbackBackdrop }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        );
        const data = await res.json();

        // find YouTube trailer
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setTrailerKey(trailer ? trailer.key : null);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    if (movieId) fetchTrailer();
  }, [movieId]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {trailerKey ? (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original${fallbackBackdrop}`}
          alt="Movie backdrop"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default VideoBackground;
