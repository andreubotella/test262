// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.1_A4_T2;
* @section: 12.1;
* @assertion: The production Block can't be inside of expression;
* @description: Checking if execution of "y={x}" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.1_A4_T2",

path: "12.1",

description: "Checking if execution of \"y={x}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("x=1;\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\ny={x};\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

