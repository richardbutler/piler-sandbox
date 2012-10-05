var pound = require("pound"),
    defineAsset = pound.defineAsset;
    
pound.resolve.js = function(filename) {
  return __dirname + "/scripts/" + filename + ".js";
};

pound.resolve.module = pound.resolve.js;

pound.resolve.vendor = function(filename) {
  return __dirname + "/vendor/" + filename + ".js";
};

pound.resolve.css = function(filename) {
  return __dirname + "/stylesheets/" + filename + ".styl";
};

defineAsset({ name: "global" }, {
  css: [
    "$css/app"
  ],
  js: [
    "$vendor/underscore",
    "$vendor/jquery-1.7.1.min",
    "$vendor/almond",
    "$module/nmod",
    "$module/thing",
    "$js/client"
  ]
});

module.exports = pound;
