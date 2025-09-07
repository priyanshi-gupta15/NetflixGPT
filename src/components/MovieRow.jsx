import React from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 mb-8">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex gap-4 pb-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
