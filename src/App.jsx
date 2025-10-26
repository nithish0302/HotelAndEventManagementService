import { useState } from "react";

import "./App.css";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
