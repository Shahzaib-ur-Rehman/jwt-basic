const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
  });
};


module.exports = connectDB