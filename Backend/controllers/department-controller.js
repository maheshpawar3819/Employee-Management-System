const Department = require("../models/Department");

const addDepartment = async (req, res) => {
  try {
    const { dep_name, description } = req.body;
    const newDepartment = await Department.create({
      dep_name,
      description,
    });

    //send response
    return res.status(200).json({
      success: true,
      department: newDepartment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "add department server error",
    });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json({
      success: true,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "didnt find any department server error",
    });
  }
};

module.exports = { addDepartment, getDepartments };
