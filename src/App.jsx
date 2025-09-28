import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
