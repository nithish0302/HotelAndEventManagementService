import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
const routes = {
  auth: {
    signin: "/",
    signup: "/signup",
  },

  user: {
    dashboard: "/user_dashboard",
  },

  vendor: {
    details: "/vendor_details",
    dashboard: "/vendor_dashboard",
  },
  admin: {
    dashboard: "/admin_dashboard",
  },
};

export default routes;
