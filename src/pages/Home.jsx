import { Link } from "react-router-dom";
import BackgroundLayout from "../components/Hero";

const Home = () => {
  return (
    <BackgroundLayout className="min-h-screen flex flex-col justify-between text-white relative px-6 ">
      {/* Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight ">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg sm:text-xl font-medium mb-6">
          Starts at ₹149. Cancel anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 max-w-full px-4 py-3 text-white rounded-md border border-gray-500 focus:outline-none focus:border-red-600 bg-black/60"
          />
          <Link to="/login" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-red-600 px-6 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-red-700 transition">
              Get Started →
            </button>
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Home;
