import React from "react";
import { AuthProvider } from "context/AuthContext";
import RouteManager from "routes";
import "./baseStyles.css";

const App = () => {
  return (
    <AuthProvider>
      <RouteManager />
    </AuthProvider>
  );
};

export default App;
