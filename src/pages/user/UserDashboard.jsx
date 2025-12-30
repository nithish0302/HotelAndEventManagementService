import React from "react";
import { signoutApi } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import routes from "../../config/routes";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleSignOut = async () => {
    try {
      await signoutApi();
      logout();
      localStorage.removeItem("token");
      toast.success("Signed out successfully");
      navigate(routes.auth.signin, { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "signout unsuccessfull ");
    }
  };
  return (
    <div>
      <p>hi</p>
      <button onClick={handleSignOut}>Signout</button>
    </div>
  );
};

export default UserDashboard;
