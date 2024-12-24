import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { colums } from "../../Utils/DepartmentHelpers/DepartmentHelper";
import axios from "axios";
import { DepartmentButtons } from "../../Utils/DepartmentHelpers/DepartmentHelper";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false);

  const fetchDepartments = async () => {
    setDepLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/department`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);

      if (response?.data?.success) {
        let sno = 1;
        const data = await response?.data?.departments.map((dep) => ({
          id: dep._id,
          sno: sno++,
          dep_name: dep.dep_name,
          action: <DepartmentButtons />,
        }));
        setDepartments(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    } finally {
      setDepLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <>
      {depLoading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Departments</h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Dep Name"
              className="px-4 py-0.5 border"
            />
            <Link
              to="/admin-dashboard/add-department"
              className="px-4 py-1 bg-teal-600 rounded text-white"
            >
              Add New Department
            </Link>
          </div>
          <div className="mt-5 rounded-md">
            <DataTable columns={colums} data={departments} />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentList;
