import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";

import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./store";
import ToasterComponent from "./components/ToasterComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "auth/sign-in", element: <SignIn /> },
      { path: "auth/sign-up", element: <SignUp /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToasterComponent />
      </Provider>
    </>
  );
}
