import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/FirebaseAuth";
import { setUser, clearUser } from "../store/userSlice";
import { useEffect, useState } from "react";
import { toggleGptTab } from "../store/gptSlice";
import { Supported_Languages } from "../utils/LanguageConstant";
import { setLang } from "../store/langSlice";
import { Menu, X } from "lucide-react";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const gptpage = useSelector((state) => state.gpt.gptTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

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
        navigate("/browse");
      } else {
        dispatch(clearUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white bg-gradient-to-b from-black via-black/70 to-transparent z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-wide">
          <Link to="/">NETFLIX</Link>
        </h1>

        {/* Desktop Menu */}
        {!user ? (
          <Link
            to="/login"
            className="hidden md:inline-block bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
          >
            Sign In
          </Link>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            {!gptpage ? (
              <button
                className="bg-purple-500 px-4 py-1 rounded-md font-medium hover:bg-purple-600 transition"
                onClick={() => dispatch(toggleGptTab())}
              >
                <Link to="/gpt">GPT Search</Link>
              </button>
            ) : (
              <>
                {/* Language Selector */}
                <select
                  className="bg-black text-white border border-gray-600 rounded-md px-2 py-1 text-sm"
                  onChange={(e) => dispatch(setLang(e.target.value))}
                >
                  {Supported_Languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>

                <button
                  className="bg-purple-500 px-4 py-1 rounded-md font-medium hover:bg-purple-600 transition"
                  onClick={() => dispatch(toggleGptTab())}
                >
                  <Link to="/browse">Home</Link>
                </button>
              </>
            )}
            <button
              onClick={handleSignOut}
              className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {user && (
          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
        {!user && (
          <Link to="/login" className="md:hidden">
            <button className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition">
              Sign In
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && user && (
        <div className="md:hidden bg-black/90 px-4 py-3 space-y-3">
          {!gptpage ? (
            <button
              className="block w-full text-left bg-purple-500 px-4 py-2 rounded-md font-medium hover:bg-purple-600 transition"
              onClick={() => {
                dispatch(toggleGptTab());
                setMobileOpen(false);
              }}
            >
              <Link to="/gpt">GPT Search</Link>
            </button>
          ) : (
            <>
              <select
                className="w-full bg-black text-white border border-gray-600 rounded-md px-2 py-2 text-sm"
                onChange={(e) => dispatch(setLang(e.target.value))}
              >
                {Supported_Languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <button
                className="block w-full text-left bg-purple-500 px-4 py-2 rounded-md font-medium hover:bg-purple-600 transition"
                onClick={() => {
                  dispatch(toggleGptTab());
                  setMobileOpen(false);
                }}
              >
                <Link to="/browse">Home</Link>
              </button>
            </>
          )}
          <button
            onClick={handleSignOut}
            className="block w-full text-left bg-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
