const mongoose = require("mongoose");

const coneectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`MONGO-DB CONNECTED ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = coneectDB;
