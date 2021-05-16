var mongoose = require("mongoose");

var authenschema = mongoose.Schema(
  {
    // Declare JSON document
    username: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    // Declare collection of MongoDB [Optional]
    collection: "user"
  }
);

var Authen = mongoose.model("user", authenschema);
module.exports = Authen;