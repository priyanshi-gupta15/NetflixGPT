import { useState, useRef } from "react";
import { Link} from "react-router-dom";
import Validate from "../utils/Validate";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { signIn, signUp } from "../utils/LoginAuth";

const AuthForm = () => {

  const dispatch = useDispatch();


  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const message = Validate(
      emailRef.current?.value,
      passwordRef.current?.value,
      usernameRef.current?.value
    );
    if (message) {
      setError(message);
      return;
    }

    setError("");

    try {
      const user = isSignUp
        ? await signUp(emailRef.current.value, passwordRef.current.value)
        : await signIn(emailRef.current.value, passwordRef.current.value);

      if (user) {
        // immediately store in Redux
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || usernameRef.current.value || "",
          })
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-black/80 p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg text-white my-8 sm:my-12 md:my-16 mx-4 sm:mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h2>

      {/* Username field only for Sign Up */}
      {isSignUp && (
        <input
          type="text"
          ref={usernameRef}
          placeholder="Username"
          className="w-full p-3 mb-3 sm:mb-4 rounded border border-gray-600 bg-gray-700/50 focus:outline-none focus:border-red-500 text-sm sm:text-base"
        />
      )}

      {/* Email */}
      <input
        ref={emailRef}
        type="email"
        placeholder="Email or mobile number"
        className="w-full p-3 mb-2 rounded border border-gray-600 bg-gray-700/50 focus:outline-none focus:border-red-500 text-sm sm:text-base"
      />

      {/* Password */}
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-2 rounded border border-gray-600 bg-gray-700/50 focus:outline-none focus:border-red-500 text-sm sm:text-base"
      />

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4">{error}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base transition"
      >
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>

      {/* OR Divider */}
      <div className="flex items-center my-4 sm:my-6">
        <hr className="flex-grow border-gray-600" />
        <span className="px-2 text-gray-400 text-xs sm:text-sm">OR</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Sign-in Code button */}
      <button
        type="button"
        className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 sm:py-3 rounded font-medium text-sm sm:text-base transition"
      >
        Use a sign-in code
      </button>

      {/* Forgot password */}
      <div className="mt-3 sm:mt-4 text-center">
        <Link
          to="/forgot-password"
          className="text-xs sm:text-sm text-gray-300 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Remember me + Switch Sign Up/Sign In */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-300 gap-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Remember me</span>
        </label>

        {!isSignUp ? (
          <p>
            New to Netflix?{" "}
            <span
              onClick={() => setIsSignUp(true)}
              className="text-white font-medium hover:underline cursor-pointer"
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setIsSignUp(false)}
              className="text-white font-medium hover:underline cursor-pointer"
            >
              Sign in now.
            </span>
          </p>
        )}
      </div>

      {/* Captcha info */}
      <p className="text-xs text-gray-500 mt-4 sm:mt-6 text-center leading-snug">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <span className="text-blue-400 hover:underline cursor-pointer">
          Learn more.
        </span>
      </p>
    </form>
  );
};

export default AuthForm;
