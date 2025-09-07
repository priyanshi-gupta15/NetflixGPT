import { useSelector } from "react-redux";
import VideoBackground from "./VedioBackground";
import VideoTitle from "./VedioTitle";

const Banner = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);
  if (!movies?.length) return null;

  const mainMovie = movies[0];

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background trailer (behind everything) */}
      <VideoBackground
        movieId={mainMovie?.id}
        fallbackBackdrop={mainMovie?.backdrop_path}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

      {/* Foreground Content */}
      <div className="absolute top-1/3 sm:top-1/2 left-4 sm:left-8 md:left-12 z-20 max-w-xs sm:max-w-md md:max-w-xl">
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />

        {/* Buttons like Netflix */}
        <div className="mt-3 sm:mt-4 flex flex-wrap sm:flex-row gap-2 sm:gap-3">
          <button className="bg-white text-black px-4 sm:px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition text-sm sm:text-base">
            ▶ Play
          </button>
          <button className="bg-gray-700/80 text-white px-4 sm:px-5 py-2 rounded-md font-semibold hover:bg-gray-600 transition text-sm sm:text-base">
            ℹ More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
