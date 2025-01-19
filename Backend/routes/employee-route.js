const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middleware/auth-Middleware");
const { addEmployee, upload } = require("../controllers/employee-controller");

//route for add Employee
router.route("/add").post(verifyUser, upload.single("image"), addEmployee);

module.exports = router;
