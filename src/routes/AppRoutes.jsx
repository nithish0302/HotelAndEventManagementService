import React from "react";
import routes from "../config/routes";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ProtectedRoutes from "../components/common/ProtectedRoutes";
const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <div>
      <Routes>
        <Route path={routes.auth.signin} element={<SignIn />} />
        <Route path={routes.auth.singup} element={<SignUp />} />

        {/* <Route
          path={routes.dashboard}
          element={
            <ProtectedRoutes allowedRoles={["user", "vendor", "admin"]}>
              <Dashboard />
            </ProtectedRoutes>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
