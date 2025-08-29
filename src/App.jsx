import React from "react";import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Browse from "./pages/Browse";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Browse", element: <Browse /> },
      { path: "/Login", element: <Login /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}