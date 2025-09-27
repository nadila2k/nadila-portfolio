import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import { Roles } from "./features/auth/roles";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./store";
import ToasterComponent from "./components/ToasterComponent";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerDashboardLayout from "./components/CustomerDashboardLayout";
import AdminProfile from "./pages/AdminProfile";
import AdminDashboardLayout from "./components/AdminDashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "auth/sign-in", element: <SignIn /> },
      { path: "auth/sign-up", element: <SignUp /> },
      {
        path: "customer-dashboard",
        element: (
          <ProtectedRoute role={Roles.CUSTOMER}>
            <CustomerDashboardLayout />
          </ProtectedRoute>
        ),
        children: [{ index: true, element: <CustomerProfile /> }],
      },
      {
        path: "admin-dashboard",
        element: (
          <ProtectedRoute role={Roles.ADMIN}>
            <AdminDashboardLayout />
          </ProtectedRoute>
        ),
        children: [{ index: true, element: <AdminProfile /> }],
      },
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
