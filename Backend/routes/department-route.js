const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middleware/auth-Middleware");
const {
  addDepartment,
  getDepartments,
} = require("../controllers/department-controller");

router.route("/").get(verifyUser, getDepartments);
router.route("/add").post(verifyUser, addDepartment);

module.exports = router;
