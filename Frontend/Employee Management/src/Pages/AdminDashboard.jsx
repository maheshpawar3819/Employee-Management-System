import React from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useAuth();


  return (
    <div>
      <p>admin dashboard {user && user.name}</p>
    </div>
  );
};

export default AdminDashboard;
