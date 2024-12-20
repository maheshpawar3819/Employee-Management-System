import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";

const AdminSideBar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 ">
      <div className="bg-teal-600 h-12 flext items-center justify-center">
        <p className="text-2xl text-center font-pacifico pt-2">Employee Ms</p>
      </div>
      <div>
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 m-auto pl-14 text-xl py-2.5 rounded tracking-wider`
          }
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/employee-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 m-auto pl-14 text-xl py-2.5 rounded tracking-wider`
          }
        >
          <FaUser />
          <span>Employee</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 m-auto pl-14 text-xl py-2.5 rounded tracking-wider`
          }
        >
          <FaBuilding />
          <span>Department</span>
        </NavLink>
        <NavLink
          to="/employee-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 m-auto pl-14 text-xl py-2.5 rounded tracking-wider`
          }
        >
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>
        <NavLink
          to="/employee-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 m-auto pl-14 text-xl py-2.5 rounded tracking-wider`
          }
        >
          <FaMoneyBillWave />
          <span>Salary </span>
        </NavLink>
        <NavLink
          to="/employee-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 m-auto pl-14 text-xl py-2.5 rounded tracking-wider`
          }
        >
          <FaMoneyBillWave />
          <span>Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSideBar;
