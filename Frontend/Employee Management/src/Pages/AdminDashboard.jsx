import React from "react";
import { useAuth } from "../Context/authContext";

const AdminDashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <p>admin dashboard {user && user.name}</p>
    </div>
  );
};

export default AdminDashboard;
