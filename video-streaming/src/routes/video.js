var express = require('express');
const fs = require("fs");
resolve = require('path').resolve
var router = express.Router();

/* GET videos */
router.get('/', function(req, res, next) {
  const path = resolve("../videos/SampleVideo_1280x720_1mb.mp4");
  fs.stat(path, (err, stats) => {

    if (err) {
      console.error("An error occurred "+ err);
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(path).pipe(res);
  });
});

module.exports = router;
