// Copyright (c) 2015, 2016 Alvin Pivowar

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("index", { title: "Material Intro" });
});

module.exports = router;
