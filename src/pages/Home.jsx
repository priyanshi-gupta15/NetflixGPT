// src/components/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-60"
        alt="Netflix hero"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-lg sm:text-xl font-medium mb-6">
        Starts at ₹149. Cancel at any time.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-4 py-3 text-white rounded-md border border-gray-500 focus:outline-none focus:border-red-600 bg-black/60"
        />
        <Link to="/login" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-red-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            Get Started →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
