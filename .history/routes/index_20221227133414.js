var express = require("express");
var router = express.Router();
var sql = require("../database/sql");

router.get("/", function (req, res, next) {
  res.render("sections", {
    title: "섹션 목록",
  });
});

module.exports = router;
