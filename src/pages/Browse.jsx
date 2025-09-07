import useFetchMovies from "../hooks/useFetchMovie";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import MovieRow from "../components/MovieRow";
import GptSearch from "../components/GptSearch";


const Browse = () => {
  const gptbox = useSelector((state) => state.gpt.gptTab);
  // 🔹 Get movies from Redux
  const { nowPlaying, popular, topRated, upcoming } = useSelector(
    (state) => state.movies
  );

  // 🔹custom hook 
  useFetchMovies();

  if(gptbox) return <GptSearch />

 

  return (
    <>
      {/* 
      Roadmap for Browse Page

 Banner with fallback video/image

 Fetch & store multiple movie categories in Redux

 MovieRow UI (horizontal scroll)

 Add skeleton loader for movies until data loads

 (Optional) Clicking a movie → show trailer modal
      
      
      layout
        -Main container(banner)
         - tailer  featured banner
         - title Description, Play, More Info
      -Secondary container(movie rows)
      - row of movies - 10 crousel
      -more categories
      -footer */}

      <div className="bg-black min-h-screen text-white">
        {/* Banner Section */}
        <Banner />

        {/* Movie Rows */}
        <div className="relative z-10 space-y-10 mt-[-40px] md:mt-[-80px]">
          {nowPlaying && <MovieRow title="Now Playing" movies={nowPlaying} />}
          {popular && <MovieRow title="Popular" movies={popular} />}
          {topRated && <MovieRow title="Top Rated" movies={topRated} />}
          {upcoming && <MovieRow title="Upcoming" movies={upcoming} />}
        </div>
      </div>
    </>
  );
};

export default Browse;
