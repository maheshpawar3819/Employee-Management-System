const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth-controller");

//create route for login
router.route("/login").post(login);


module.exports=router;