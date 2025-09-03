// src/App.jsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { auth } from "./utils/FirebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "./store/userSlice";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // ✅ auth loading state

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
      } else {
        dispatch(clearUser());
      }
      setLoading(false); // ✅ auth check done
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) return <div className="text-white">Loading...</div>; // ✅ wait for Firebase

  return <RouterProvider router={appRouter} />;
}
