"use strict";

var test = require("tape");

var myPluginInstance = require("../src")();

test("should return input",function(t){
  var myInput = "blablabla";

  t.equal(myPluginInstance.run(myInput),myInput);

  t.end();

})
