var vows = require('vows');
var assert = require('assert');
var util = require('util');
var gitlab = require('passport-gitlab');


vows.describe('passport-gitlab').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(gitlab.version);
    },
  },
  
}).export(module);
