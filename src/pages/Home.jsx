// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Hero>
      <div className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg sm:text-xl font-medium mb-6">
          Starts at ₹149. Cancel anytime.
        </p>

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
    </Hero>
  );
};

export default Home;
