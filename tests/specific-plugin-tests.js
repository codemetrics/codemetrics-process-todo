"use strict";

var test = require("tape");

var myPluginInstance = require("../src")();

var data = "";
var inputFiles = [ { name: 'tests/samples/codefile.js',
        data: 'const hello = "world";\n\n//TODO : conquest the world\n\n\n' },
      { name: 'tests/samples/samplefile',
        data: '"line 1"\n"line 2"\n\nblablabla\nblablabla' } ] ;


test("should found todo string",function(t){
  var result = myPluginInstance.run(inputFiles);
  console.log(JSON.stringify(result));
  t.equal(result.length,2);

  t.end();

})
