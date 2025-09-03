// src/pages/Login.jsx
import Hero from "../components/Hero";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <Hero>
      <div className="flex items-center justify-center min-h-screen">
        <AuthForm />
      </div>
    </Hero>
  );
};

export default Login;
