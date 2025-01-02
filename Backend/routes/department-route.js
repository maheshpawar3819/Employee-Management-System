const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middleware/auth-Middleware");
const {
  addDepartment,
  getDepartments,
  getDepartment,
  editDepartment,
  deleteDepartment
} = require("../controllers/department-controller");

router.route("/").get(verifyUser, getDepartments);
router.route("/add").post(verifyUser, addDepartment);
router.route("/:id").get(verifyUser, getDepartment);
router.route("/edit/:id").put(verifyUser, editDepartment);
router.route("/delete/:id").delete(verifyUser,deleteDepartment);

module.exports = router;
