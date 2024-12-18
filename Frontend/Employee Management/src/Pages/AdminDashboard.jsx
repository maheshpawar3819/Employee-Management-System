import React from "react";
import { useAuth } from "../Context/authContext";
import AdminSideBar from "../Components/Dashboard/AdminSideBar";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <AdminSideBar/>
      <p>admin dashboard {user && user.name}</p>
    </div>
  );
};

export default AdminDashboard;
