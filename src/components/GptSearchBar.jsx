// // src/components/GptSearchBox.jsx
// import React, { useState } from "react";

// const GptSearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex justify-center mb-6 gap-2">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for movies..."
//         className="px-4 py-2 w-2/3 md:w-1/2 border rounded-l-lg outline-none"
//       />
//       <button
//         type="submit"
//         className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default GptSearchBar;

// src/components/GptSearchBar.jsx
import React, { useRef,useState} from "react";
import { useSelector } from "react-redux";
import { Supported_Languages } from "../utils/LanguageConstant";
// import client from "../utils/open_ai";
import Suggestions from "./GptMovieSuggestion";
import client from "../utils/open_ai";
import { GPT_MODEL} from "../utils/constant";


const GptSearchBar = () => {

  const searchtext = useRef("");
  console.log(searchtext.current.value);
  
  const lang = useSelector((state) => state.lang.lang);

   const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // build query here (inside the function)
    const query =
      "Act as a movie recommendation engine and suggest some movies based on my interest in " +
      searchtext.current.value +
      ". Provide only movie titles separated by commas.";

    if (!query.trim()) return;

    setLoading(true);
    setMovies([]);
    try {
      // Ask GPT for movie suggestions
      const response = await client.responses.create({
        model: GPT_MODEL, // cheap + good
        input: query,
      });

      const result = response.output[0].content[0].text;
      console.log("GPT Response:", result);
      const movieList = result.split(",").map((m) => m.trim());
      setMovies(movieList);
    } catch (error) {
      console.error("Error fetching GPT suggestions:", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center px-4 w-full"
      >
        <div className="flex w-400 max-w-2xl shadow-lg ">
          <input
            type="text"
            ref={searchtext}
            placeholder={
              Supported_Languages.find((l) => l.code === lang)?.Placeholders ||
              "Search for movies..."
            }
            className="flex-grow px-4 py-3 rounded-l-full bg-black/70 text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-200"
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-red-700 px-6 py-3 rounded-r-full font-semibold 
                       transition duration-200"
          >
            {loading
              ? "Searching..."
              : Supported_Languages.find((l) => l.code === lang)?.btn ||
                "Search"}
          </button>
        </div>
      </form>

      {/* ✅ Show suggestions below */}
      <Suggestions movies={movies} />
    </div>
  );
};

export default GptSearchBar;

