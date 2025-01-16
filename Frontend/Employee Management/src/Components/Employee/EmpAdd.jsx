import React from "react";
import { useState } from "react";
import useGetDepartments from "../../Utils/EmployeeHelpers/useGetDepartments";
import { useSelector } from "react-redux";

const EmpAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    designation: "",
    department: "",
    salary: "",
    password: "",
    role: "",
    image: null,
  });
  //hook call to get departments
  useGetDepartments();

  //get departments from redux store
  const departments = useSelector((store) => store.department.departments);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-2">
      <h2 className="text-2xl font-bold text-center mb-5">Add Employee</h2>
      <form className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Insert Name"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Insert Email"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            placeholder="Employee ID"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Marital Status</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            placeholder="Designation"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Department</option>
            {departments &&
              departments.map((dep) => {
                return (
                  <option value={dep._id} key={dep._id}>
                    {dep.dep_name}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            placeholder="Salary"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="********"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            placeholder="Upload Image"
            onChange={handleInputChange}
            accept="image/*"
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpAdd;
