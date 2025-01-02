const Department = require("../models/Department");

const addDepartment = async (req, res) => {
  try {
    const { dep_name, description } = req.body;
    const newDepartment = await Department.create({
      dep_name,
      description,
    });

    // send response to frontend
    return res.status(200).json({
      success: true,
      department: newDepartment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "add department server error",
    });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    // send response to frontend
    res.status(200).json({
      success: true,
      departments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "didnt find any department server error",
    });
  }
};

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const department = await Department.findById({ _id: id });

    // send response to frontend
    return res.status(200).json({
      success: true,
      department,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "get Department server error",
    });
  }
};

const editDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_name, description } = req.body;

    const updateDep = await Department.findByIdAndUpdate(
      { _id: id },
      {
        dep_name: dep_name,
        description: description,
      }
    );

    if (!updateDep) {
      return res.status(404).json({
        success: false,
        message: "Unable to update department",
      });
    }

    // send response to frontend
    return res.status(200).json({
      success: true,
      updateDep,
      message: "Update Department Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Edit Department server error",
    });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteDep = await Department.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Successfully Delete Department",
      deleteDep,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Delete Department server error",
    });
  }
};

module.exports = {
  addDepartment,
  getDepartments,
  getDepartment,
  editDepartment,
  deleteDepartment,
};
