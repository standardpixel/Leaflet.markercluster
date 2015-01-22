"use strict";

var fs   = require("fs"),
    exec = require('child_process').exec;

fs.watch("src", {"persistent":true}, function(err, info) {

  exec("jake", function(err, stdout, stderr) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log("File updated", info);
    console.log(stdout);
  });

});
