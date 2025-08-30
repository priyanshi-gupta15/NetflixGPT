// Login.jsx
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Validate from "../utils/Validate";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // State for error messages
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const message = Validate(emailRef.current.value, passwordRef.current.value);
    if (message) {
      setError(message); // show error if validation fails
      return;
    }

    // If validation passed
    setError(""); // clear errors
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);

    navigate("/browse");
  };

  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="relative min-h-screen overflow-y-auto flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
        alt="Netflix login bg"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="relative bg-black/80 p-10 rounded-lg w-full max-w-md text-white my-16"
      >
        <h2 className="text-3xl font-bold mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {/* if signup form then username is also required */}
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-700/50 focus:outline-none focus:border-red-500"
          />
        )}

        {/* Email */}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 mb-2 rounded border border-gray-600 bg-gray-700/50 focus:outline-none focus:border-red-500"
        />

        {/* Password */}
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-2 rounded border border-gray-600 bg-gray-700/50 focus:outline-none focus:border-red-500"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Sign-in Code */}
        <button
          type="button"
          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded font-medium transition"
        >
          Use a sign-in code
        </button>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-300 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Remember Me + Signup */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Remember me</span>
          </label>
          {!isSignUp ? (
            <p>
              New to Netflix?{" "}
              <Link
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-white font-medium hover:underline cursor-pointer"
              >
                Sign up now.
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-white font-medium hover:underline cursor-pointer"
              >
                Sign in now.
              </Link>
            </p>
          )}
        </div>

        {/* Captcha */}
        <p className="text-xs text-gray-500 mt-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            Learn more.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
