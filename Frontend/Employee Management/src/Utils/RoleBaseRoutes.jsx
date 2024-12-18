import React from "react";
import { useAuth } from "../Context/authContext";
import { Navigate } from "react-router-dom";

const RoleBaseRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    <div>Loading..</div>;
  }

  if (!requiredRole.includes(user.role)) {
    <Naivgate to="/unauthorized" />;
  }

  return user ? children : <Navigate to={"/login"} />;
};

export default RoleBaseRoutes;
