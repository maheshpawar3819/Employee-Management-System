import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const EmpList = () => {
  const [employees,setEmployees]=useState([]);
  const [empLoading,setEmpLoading]=useState(false);

    const getEmployees = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/employee`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        if(!response){
          console.log("something wrong");
        }

        
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    useEffect(() => {
      getEmployees();
    },[])

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employees</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Dep Name"
          className="px-4 py-0.5 border"
        />
        <Link
          to="/admin-dashboard/add-employee"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add New Employee
        </Link>
      </div>
    </div>
  );
};

export default EmpList;
