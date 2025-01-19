const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  employeeId: { type: String, required: true, unique: true },
  dob: { type: Date },
  gender: { type: String },
  maritalStatus: { type: String },
  designation: { type: String },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    require: true,
  },
  salary:{type:String,required : true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


const Employee=mongoose.model("Employee",employeeSchema);

module.exports=Employee;