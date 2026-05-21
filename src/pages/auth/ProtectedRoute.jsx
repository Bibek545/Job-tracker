import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const accessJWT = localStorage.getItem("jwtToken");
  if (accessJWT) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
