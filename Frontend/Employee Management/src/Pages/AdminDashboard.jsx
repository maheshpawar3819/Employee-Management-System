import React from "react";
import AdminSideBar from "../Components/Dashboard/AdminSideBar";
import Navbar from "../Components/Dashboard/Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="flex-1 ml-64 h-screen bg-gray-100">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashboard;
