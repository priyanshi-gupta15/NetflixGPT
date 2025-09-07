import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="space-y-2 sm:space-y-4 text-white drop-shadow-md sm:-mt-16 md:-mt-20 lg:-mt-24">
      {/* Movie Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
        {title}
      </h1>

      {/* Truncated Overview (only visible on larger screens) */}
      <p className="hidden sm:block text-sm sm:text-base md:text-lg text-gray-200 max-w-xs sm:max-w-md md:max-w-2xl line-clamp-3">
        {overview}
      </p>
    </div>
  );
};

export default VideoTitle;
