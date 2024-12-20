const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middleware/auth-Middleware");
const { addDepartment } = require("../controllers/department-controller");

router.route("/add").post(verifyUser, addDepartment);

module.exports = router;
