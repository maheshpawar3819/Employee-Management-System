import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import authContext from "./Context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <authContext>
    <App />
  </authContext>
);
