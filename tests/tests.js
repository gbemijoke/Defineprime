// testing code goes here
(function(){
'use strict'

var jasmine = require('jasmine');


var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    expect(myApp.getPrime2(10)).toEqual([2,3,5,7]);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    expect(myApp.getPrime2(1)).toEqual([]);
  })
  it("should return 120 as factorial for 5", function() {
    expect(myApp.getPrime2(100)).toContain(97);
  })
})

})();
