// src/components/Header.jsx
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react"; // for icons (install: npm i lucide-react)
import { useState } from "react";

const Header = () => {
  const [signIn, setIsSignIn] = useState(false);
  return (
    <header className=" fixed top-0 left-0 w-full  text-white bg-gradient-to-b from-black to-transparent z-50">
      <div className="flex justify-between items-center px-8 py-4 z-50">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wide absolute top-0  z-60 py-3 ">
          <Link to="/">NETFLIX</Link>
        </h1>

        {/* background */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          className="w-full object-cover opacity-40 z-0 scroll sm:h-180"
          alt="hero img"
        />

        {/* Navigation
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/tv-shows" className="hover:text-gray-300 transition">
            TV Shows
          </Link>
          <Link to="/movies" className="hover:text-gray-300 transition">
            Movies
          </Link>
          <Link to="/new-popular" className="hover:text-gray-300 transition">
            New & Popular
          </Link>
          <Link to="/my-list" className="hover:text-gray-300 transition">
            My List
          </Link>
        </nav> */}

        {/* Right side */}
        {!signIn && (
          <div className="flex items-center space-x-5 absolute right-0 top-0 py-5 px-8">
            {/* Sign In */}
            <Link
              to="/login"
              onClick={() => setIsSignIn(true)}
              className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
            >
              Sign In
            </Link>
          </div>
        )}
        
      </div>
    </header>
  );
};

export default Header;
