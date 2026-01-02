// import { useState } from "react";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import VendorDetails from "./pages/vendor/vendorDetails";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    // <AuthProvider>
    //   <BrowserRouter>
    //     <AppRoutes />
    //     <Toaster position="top-right" reverseOrder={false} />
    //   </BrowserRouter>
    // </AuthProvider>

    <div>
      <VendorDetails />
    </div>
  );
}

export default App;
