var express = require("express");
var router = express.Router();
var Authen = require("./authenmodel");

// GET (get user data)
router.get("/getUser", (req, res) => {
  Authen.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/createUser", (req, res) => {
  var obj = new Authen(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("[success] - create an account");
  });
});

module.exports = router;