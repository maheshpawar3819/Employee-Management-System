const multer = require("multer");
const path = require("path");
const Employee = require("../models/Employee");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//handle file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//controller for adding employee
const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      salary,
      password,
      role,
    } = req.body;

    //check is email is existed or not
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "User already registered" });
    }

    //hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    //register the user
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      role,
      profileImage: req.file ? req.file.filename : "",
    });

    //save the user
    const saveUser = await newUser.save();

    const newEmployee = await Employee.create({
      userId: saveUser._id,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      salary,
    });

    //save new employee
    await newEmployee.save();

    //send response
    return res.status(200).json({
      success: true,
      message: "employee created",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: "server error in adding employee",
    });
  }
};

module.exports = { addEmployee, upload };
