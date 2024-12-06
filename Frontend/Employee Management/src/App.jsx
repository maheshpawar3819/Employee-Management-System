import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import EmployeeDashboard from "./Pages/EmployeeDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/admin-dashboard"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
