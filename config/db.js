const mongoose = require("mongoose");
const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/heathcare-system", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,  
    });
    console.log("mogose connected");
  } catch (error) {
    console.log(error, "error");
  }
};

MediaSourceHandle.exports = { connectMongoDB };
