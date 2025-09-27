import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user, isAuth } = useSelector((state) => state.auth);

  if (!isAuth) return <Navigate to="/auth/sign-in" />; 
  if (role && user.role !== role) return <Navigate to="/" />; 

  return children;
}
