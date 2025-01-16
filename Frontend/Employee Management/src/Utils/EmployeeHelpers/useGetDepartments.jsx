import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDepartments } from "../../Store/departments";

const useGetDepartments = () => {
  const dispatch = useDispatch();
  const getDeps = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/department`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response);
      if (response?.data?.success) {
        dispatch(getDepartments(response?.data?.departments));
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };
  useEffect(() => {
    getDeps();
  },[]);
};


export default useGetDepartments;
