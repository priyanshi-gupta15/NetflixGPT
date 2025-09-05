import { Link ,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FirebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../store/userSlice";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((state) => state.user.user); // ✅ get user from redux

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse"); // redirect if logged in
      } else {
        dispatch(clearUser());
        navigate("/"); // redirect if logged out
      }
     
    });
    // unsubscribe the user  to unmount the component
    return () => unsubscribe();
  }, [dispatch, navigate]);

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // navigate("/"); // redirect after sign out //alredy redirect from app
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
