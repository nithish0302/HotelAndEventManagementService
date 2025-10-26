import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import routes from "../../config/routes";

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routes.auth.signin} />;
  }

  if (allowedRoles && !allowedRoles.includes(user.roles)) {
    return <Navigate to={routes.dashboard} />;
  }
  return children;
};
export default ProtectedRoutes;
