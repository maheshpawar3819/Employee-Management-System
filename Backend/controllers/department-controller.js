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

module.exports = { addDepartment };
