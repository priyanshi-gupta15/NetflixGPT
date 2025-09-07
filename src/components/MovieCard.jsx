import React from "react";
import { IMG_BASE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;

  return (
    <div className="w-28 sm:w-32 md:w-40 flex-shrink-0 transform hover:scale-105 transition duration-300 snap-start">
      <img
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title || "Movie poster"}
        loading="lazy"
        className="rounded-lg shadow-md object-cover w-full h-auto"
      />
      <p className="mt-2 text-sm truncate text-center">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
