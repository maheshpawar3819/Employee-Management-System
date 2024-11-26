const User = require("./models/User");
const bcrypt = require("bcrypt");
const connectToDatabase = require("./db/db");

const userRegister = async () => {
  connectToDatabase();
  try {
    //hash tha password
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    //save tha main admin user
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();
