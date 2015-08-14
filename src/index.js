"use strict";

const Objectassign = require("object-assign");

const defaultOptions = {};

module.exports = function(options = {}) {

  Objectassign(options,defaultOptions);

  return {
    run : function(input) {
      return input;
    }
  }
}