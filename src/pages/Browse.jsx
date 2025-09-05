import useNowPlaying from "../hooks/useNowPlaying";
import Banner from "../components/Banner";


const Browse = () => {
  useNowPlaying();

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

      <div className="bg-black">
        <Banner />
        {/* Movie Rows */}
      </div>
    </>
  );
};

export default Browse;
