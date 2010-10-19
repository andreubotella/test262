// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.1_A3_T2.6;
 * @section: 11.10.1;
 * @assertion: Operator x & y returns ToNumber(x) & ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.1_A3_T2.6",

path: "11.10.1",

description: "Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if (("1" & undefined) !== 0) {
  $ERROR('#1: ("1" & undefined) === 0. Actual: ' + (("1" & undefined)));
}

//CHECK#2
if ((undefined & "1") !== 0) {
  $ERROR('#2: (undefined & "1") === 0. Actual: ' + ((undefined & "1")));
}

//CHECK#3
if ((new String("1") & undefined) !== 0) {
  $ERROR('#3: (new String("1") & undefined) === 0. Actual: ' + ((new String("1") & undefined)));
}

//CHECK#4
if ((undefined & new String("1")) !== 0) {
  $ERROR('#4: (undefined & new String("1")) === 0. Actual: ' + ((undefined & new String("1"))));
}

 }
});

