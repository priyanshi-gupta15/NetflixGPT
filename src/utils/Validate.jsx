// utils/Validate.jsx
const Validate = (email, password) => {
  if (!email || !password) return "Email and password are required";

  // simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email";

  if (password.length < 6) return "Password must be at least 6 characters";

  return null; // no error
};

export default Validate;
