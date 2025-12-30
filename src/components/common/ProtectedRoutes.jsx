import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import routes from "../../config/routes";

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routes.auth.signin} />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === "admin") {
      return <Navigate to={routes.admin.dashboard} replace />;
    }
    if (user.role === "vendor") {
      return <Navigate to={routes.vendor.dashboard} replace />;
    }
    return <Navigate to={routes.user.dashboard} replace />;
  }
  return children;
};
export default ProtectedRoutes;
