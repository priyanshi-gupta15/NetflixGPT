// src/components/GptSearch.jsx
import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import Suggestions from "./GptMovieSuggestion";
import { API_KEY } from "../utils/constant";
import BackgroundLayout from "./Hero";

const GptSearch = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
      );
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <BackgroundLayout>
      <div className="mx-auto ">
        <GptSearchBar onSearch={handleSearch} />
        <Suggestions results={results} />
      </div>
    </BackgroundLayout>
  );
};

export default GptSearch;
