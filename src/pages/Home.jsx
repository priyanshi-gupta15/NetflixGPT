import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center px-6 text-center ">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-extrabold mb-4 z-60">
        Unlimited movies, TV shows and more
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl font-medium mb-6 z-60">
        Starts at ₹149. Cancel at any time.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl z-60">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-4 py-3 text-white rounded-md border border-gray-600 
           focus:outline-none focus:border-red-600 z-30 bg-black/40"
        />
        <Link to="/login" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-red-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
