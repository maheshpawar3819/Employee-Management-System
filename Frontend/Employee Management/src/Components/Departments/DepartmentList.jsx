import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import { colums } from "../../Utils/DepartmentHelpers/DepartmentHelper";
import axios from "axios";
import { DepartmentButtons } from "../../Utils/DepartmentHelpers/DepartmentHelper";
import { ThreeDots } from "react-loader-spinner";

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
          action: (
            <DepartmentButtons
              id={dep._id}
              onDepartmentDelete={onDepartmentDelete}
            />
          ),
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

  //function for render list when delete department
  const onDepartmentDelete = async (id) => {
    const data = departments.filter((dep) => dep._id !== id);
    setDepartments(data);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <>
      {depLoading ? (
        <div className="flex justify-center items-center h-screen">
          {" "}
          <ThreeDots color="#00BFFF" height={100} width={100} />{" "}
        </div>
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
