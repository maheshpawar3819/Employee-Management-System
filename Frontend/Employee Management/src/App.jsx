import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import PrivateRoutes from "./Utils/PrivateRoutes";
import RoleBaseRoutes from "./Utils/RoleBaseRoutes";
import AdminSummary from "./Components/Dashboard/AdminSummary";
import DepartmentList from "./Components/Departments/DepartmentList";
import AddDepartment from "./Components/Departments/AddDepartment";
import EditDepartment from "./Components/Departments/editDepartment";
import EmpList from "./Components/Employee/EmpList";
import EmpAdd from "./Components/Employee/EmpAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/admin-dashboard"} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary />}></Route>
          {/* route for departments  */}
          <Route
            path="/admin-dashboard/departments"
            element={<DepartmentList />}
          ></Route>
          <Route
            path="/admin-dashboard/add-department"
            element={<AddDepartment />}
          ></Route>
          <Route
            path="/admin-dashboard/departments/:id"
            element={<EditDepartment />}
          ></Route>
          {/* route for employees  */}
          <Route
            path="/admin-dashboard/employees"
            element={<EmpList />}
          ></Route>
          <Route
            path="/admin-dashboard/add-employee"
            element={<EmpAdd />}
          ></Route>
        </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
