import { useNavigate } from "react-router-dom";
import axios from "axios";

export const colums = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = ({ id, onDepartmentDelete }) => {
  const navigate = useNavigate();

  const deleteDepartment = async (id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/api/department/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        if (response?.data?.success) {
          onDepartmentDelete(id);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    }
  };
  return (
    <>
      <div className="flex space-x-3">
        <button
          className="p-3 py-1 bg-teal-600 text-white rounded-md"
          onClick={() => {
            navigate(`/admin-dashboard/departments/${id}`);
          }}
        >
          Edit
        </button>
        <button
          className="p-3 py-1 bg-red-600 text-white rounded-md"
          onClick={() => deleteDepartment(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
