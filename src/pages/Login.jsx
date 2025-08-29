// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // you can add auth logic here
//     navigate("/browse"); // redirect to Browse page after login
//   };

//   return (
//     <div className="bg-black text-white h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleLogin}
//         className="bg-black/75 p-10 rounded-lg w-full max-w-md text-white z-10"
//       >
//         <h2 className="text-2xl font-bold mb-6">Sign In</h2>
//         <input
//           type="text"
//           placeholder="Email or mobile number"
//           className="w-full p-3 mb-4 rounded border border-gray-500  focus:outline-none focus:border-red-500 bg-gray-700/50"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 mb-4 rounded border border-gray-500 focus:outline-none focus:border-red-500 bg-gray-700/50"
//         />
//         <button
//           type="submit"
//           className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // add auth logic here
    navigate("/browse"); // redirect after login
  };

  return (
    <div
      className="bg-black text-white h-screen flex items-center justify-center"
      // background image
    >
      <div className="absolute inset-0 bg-black"></div>

      {/* Form */}
      <form
        onSubmit={handleLogin}
        className="relative  py-10 px-18 rounded-lg w-full max-w-md text-white z-80 bg-black/80"
      >
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>

        {/* Email */}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 mb-4 rounded  border border-gray-600 bg-gray-600/30 focus:outline-none focus:border-red-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded  bg-opacity-50 border border-gray-600 focus:outline-none bg-gray-600/30 focus:border-red-500"
        />

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
        >
          Sign In
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Sign-in Code Button */}
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
          <p>
            New to Netflix?{" "}
            <Link
              to="/signup"
              className="text-white font-medium hover:underline"
            >
              Sign up now.
            </Link>
          </p>
        </div>

        {/* Captcha Note */}
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

