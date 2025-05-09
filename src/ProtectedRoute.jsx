import React from "react";
import { Navigate } from "react-router-dom";

// This component expects an `isAuthenticated` prop
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
