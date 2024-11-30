const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//controller for login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //error handling
    if (!user) {
      return res.status(404).json({ success: "false", error: "User not found" });
    }

    //verify the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: "false", error: "Wrong password" });
    }

    //generate token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    //send response
    res
      .status(200)
      .json({
        success: "true",
        token,
        user: { _id: user._id, name: user.name, role: user.user },
        message:"User login Successfully"
      });
  } catch (error) {
    res.status(500).json({success:"false",error:error.message});
  }
};

module.exports = { login };
