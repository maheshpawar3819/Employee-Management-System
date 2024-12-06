import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <App />
  </AuthContext>
);
