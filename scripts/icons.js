/*
**
**  This file creates a json file for index.html 
**  and svg-injector when building the iconset on
**  the website.
**
*/
var fs = require('fs'),
    jf = require('jsonfile'),
    ncp = require('ncp').ncp,
    pkg = require('../package.json');

exports.json = function() {
  jf.spaces = 2;
  fs.readdir('src/', function (err, files) {
    var json = { version: pkg.version, files: [] };

    for (var i = 0; i < files.length; i++) {
      if (files[i].indexOf('.svg') !== -1) {
        var file = {
          name: files[i].slice(0, -4),
          svg: files[i]
        };
        json.files.push(file);
      }
    }

    writeFile();

    function writeFile() {
      jf.writeFile('icons.json', json, function(err) {
        if (err) {
          return console.log(err);
        }
      });
    }

  });
};

exports.copy = function() {
  fs.readdir('src/', function (err, files) {
    fs.mkdir('./dist/', function(err) {
      ncp('./src', './dist', function(err) {
        console.log('Created dist. Now try running `svgo -f dist` to optimize the files.');
      });
    });
  });
}