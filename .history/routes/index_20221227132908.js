var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("sections", {
    title: "섹션 목록",
  });
});

module.exports = router;
