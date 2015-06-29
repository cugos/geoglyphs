/*
**
**  This file creates a json file for index.html 
**  and svg-injector when building the iconset on
**  the website.
**
*/
var fs = require('fs'),
    jf = require('jsonfile')
    pkg = require('./package.json');

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

  
  jf.writeFile('icons.json', json, function(err) {
    if (err) {
      return console.log(err);
    }
  });

});