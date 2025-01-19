require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth-route");
const departmentRouter = require("./routes/department-route");
const employeeRouter = require("./routes/employee-route");
const connectDatabase = require("./db/db");

connectDatabase();
app.use(cors());
app.use(express.json());

//Routers
app.use("/api/auth", authRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listning on port`, port);
});
