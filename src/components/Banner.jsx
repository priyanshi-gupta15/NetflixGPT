// src/components/Banner.jsx
import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VedioBackground";
import VideoTitle from "./VedioTitle";

const Banner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies?.length) return null;

  const mainMovie = movies[0];

  return (
    <section className="relative w-full h-[56.25vw] min-h-[60vh] max-h-[90vh] overflow-hidden">
      {/* Background trailer (behind everything) */}
      <VideoBackground
        movieId={mainMovie?.id}
        fallbackBackdrop={mainMovie?.backdrop_path}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />

      {/* Foreground Content */}
      <div className="absolute top-1/3 left-6 md:left-12 z-20 max-w-xl">
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />

        {/* Buttons like Netflix */}
        <div className="mt-4 flex gap-3">
          <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700/80 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
