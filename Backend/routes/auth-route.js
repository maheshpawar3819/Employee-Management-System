const express = require("express");
const router = express.Router();
const { login, verify } = require("../controllers/auth-controller");
const { verifyUser } = require("../middleware/auth-Middleware");

//create route for login
router.route("/login").post(login);
router.route("/verify").get(verifyUser, verify);

module.exports = router;
