var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Connect mongoDB atlas
var mongo_uri = "mongodb+srv://admin:1234@authentication.spgm2.mongodb.net/authentication?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

var app = express();
app.use(cors());

// convert to JSON which allow to work with MongoDB Atlas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("[Success] - getted started - api Express");
});

var authen  = require("./authenrouter");
app.use("/api/authen", authen);

app.use((req, res, next) => {
  var err = new Error("[Error] - path not found");
  err.status = 404;
  next(err);
});