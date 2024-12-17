import React from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, loading } = useAuth();

  const navigate = useNavigate();

  //loading state
  if (loading) {
    return <h1>Loading ....</h1>;
  }
  //to check is user valid or not
  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      <p>admin dashboard {user && user.name}</p>
    </div>
  );
};

export default AdminDashboard;
