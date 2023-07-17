const mongoose = require("mongoose");

module.exports = connect = async () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
  });
};
