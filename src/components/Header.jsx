// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [signIn, setIsSignIn] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full text-white bg-gradient-to-b from-black via-black/70 to-transparent z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wide">
          <Link to="/">NETFLIX</Link>
        </h1>

        {/* Right side */}
        {!signIn && (
          <div>
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
