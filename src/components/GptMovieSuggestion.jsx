import React from "react";

const Suggestions = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mt-6 w-full max-w-2xl bg-black/70 text-white rounded-lg p-4 shadow-lg">
      <h2 className="text-lg font-semibold mb-3">🎬 Suggested Movies</h2>
      <ul className="space-y-2">
        {movies.map((movie, index) => (
          <li
            key={index}
            className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
          >
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
