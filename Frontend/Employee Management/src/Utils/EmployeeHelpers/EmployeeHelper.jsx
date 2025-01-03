import axios from "axios";

export const fetchDepartments = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/department`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
  } catch (error) {
    if (error.response && !error.response.data.success) {
      alert(error.response.data.error);
    }
  }
};
