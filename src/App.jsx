// src/App.jsx
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from './store/appStore'
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

import Footer from "./components/Footer";

const AppLayout = () => (
  <>
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
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
  return <RouterProvider router={appRouter} />;
}
