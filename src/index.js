"use strict";

const Objectassign = require("object-assign");

const defaultOptions = {
  todoFormat: ["TODO"],
  linesToShowBefore: 1,
  linesToShowAfter: 1
};


module.exports = function(options = {}) {

  Objectassign(options, defaultOptions);

  return {
    run: function(input) {

      return input.map(function(file) {
        return {
          name: file.name,
          data: processData(file.data, options)
        };
      })
    }
  }
}

function processData(data, options) {
  //extract line data from input
  data = data.split("\n");

  // warn if there is only one line
  if (data.lentgh < 2) {
    //TODO api to bubble log msg
    console.warn("I only have one line to parse");
  }

  //serach for a todo schema
  //TODO option to add more schema

  var result = [];

  data.forEach(function(line, i) {
    if (line.indexOf(options.todoFormat[0]) !== -1) {
      result.push({
        lineNumber: i,
        extract: line
      });
    }
  });

  return result;

}
