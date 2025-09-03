import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utils/FirebaseAuth";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((state) => state.user.user); // ✅ get user from redux
  const navigate = useNavigate();

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // redirect after sign out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white bg-gradient-to-b from-black via-black/70 to-transparent z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wide">
          <Link to="/">NETFLIX</Link>
        </h1>

        {/* Right side */}
        {!user ? (
          <Link
            to="/login"
            className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
          >
            Sign In
          </Link>
        ) : (
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
