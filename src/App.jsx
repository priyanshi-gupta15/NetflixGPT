// src/App.jsx
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from './store/appStore'
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

import Footer from "./components/Footer";
import GptSearch from "./components/GptSearch";

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content takes available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/login", element: <Login /> },
      { path: "/gpt", element: <GptSearch /> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
