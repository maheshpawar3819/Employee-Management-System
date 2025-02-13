import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchId = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/department/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //   console.log(response);
      setDepartment(response?.data?.department);
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchId();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { dep_name, description } = department;
    try {
      const response = await axios.put(
        `http://localhost:8080/api/department/edit/${id}`,
        {
          dep_name,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);
      if (response.data.success) {
        alert(response?.data?.message);
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          {" "}
          <ThreeDots color="#00BFFF" height={100} width={100} />{" "}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
          <h3 className="text-2xl font-bold mb-6">Edit Department</h3>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="dep_name"
                  className="text-sm font-medium text-gray-700"
                >
                  Department Name
                </label>
                <input
                  type="text"
                  name="dep_name"
                  placeholder="Enter Dep Name"
                  className="mt-1 w-full p-2 border border-x-gray-300 rounded-md"
                  value={department.dep_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id=""
                  placeholder="description"
                  rows={4}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  value={department.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-teal-600 hover:border-t-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Department
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditDepartment;
