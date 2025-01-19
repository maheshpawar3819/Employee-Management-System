const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middleware/auth-Middleware");
const { addEmployee, upload ,getEmployees} = require("../controllers/employee-controller");

//route for get all employees
router.route("/").get(verifyUser,getEmployees);
//route for add Employee
router.route("/add").post(verifyUser, upload.single("image"), addEmployee);

module.exports = router;
