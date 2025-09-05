// src/components/VideoTitle.jsx
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="space-y-4 text-white drop-shadow-md">
      {/* Movie Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold">{title}</h1>

      {/* Truncated Overview (only visible on larger screens) */}
      <p className="hidden sm:block text-lg text-gray-200 max-w-2xl line-clamp-3">
        {overview}
      </p>
    </div>
  );
};

export default VideoTitle;
