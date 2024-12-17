const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(404).json({
        success: false,
        error: "Token is not provided",
      });
    }

    const decoaded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoaded) {
      return res.status(404).json({
        success: false,
        error: "Token is not valid",
      });
    }

    const user = await User.findById({
      _id: decoaded._id,
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Side Error",
    });
  }
};

module.exports={verifyUser};
