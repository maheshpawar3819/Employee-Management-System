const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URl);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDatabase;
