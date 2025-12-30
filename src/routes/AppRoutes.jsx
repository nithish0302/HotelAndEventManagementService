import React from "react";
import routes from "../config/routes";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ProtectedRoutes from "../components/common/ProtectedRoutes";
import UserDashboard from "../pages/user/UserDashboard";
const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <div>
      <Routes>
        <Route path={routes.auth.signin} element={<SignIn />} />
        <Route path={routes.auth.signup} element={<SignUp />} />

        <Route
          path={routes.user.dashboard}
          element={
            <ProtectedRoutes allowedRoles={["user"]}>
              <UserDashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
