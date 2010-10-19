// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.5.1_A4;
* @section: 15.5.5.1;
* @assertion: length property has the attributes {ReadOnly};
* @description: Checking if varying the length property of String fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.5.1_A4",

path: "15.5.5.1",

description: "Checking if varying the length property of String fails",

test: function testcase() {
   var __str__instance = new String("globglob");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__str__instance.hasOwnProperty("length"))) {
  $ERROR('#1: var __str__instance = new String("globglob"); __str__instance.hasOwnProperty("length") return true. Actual: '+__str__instance.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str__instance.length !== 8) {
  $ERROR('#2: var __str__instance = new String("globglob"); __str__instance.length === 8. Actual: __str__instance.length ==='+__str__instance.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str__instance.length=-1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__str__instance.length !== 8) {
  $ERROR('#3: var __str__instance = new String("globglob"); __str__instance.length=-1; __str__instance.length === 8(after redefine length property). Actual: __str__instance.length ==='+__str__instance.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

with(__str__instance)
    length = 0;
    
//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__str__instance.length !== 8) {
  $ERROR('#4: var __str__instance = new String("globglob"); with(__str__instance) length = 0; __str__instance.length === 8(after redefine length property with using "with"). Actual: __str__instance.length ==='+__str__instance.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str__instance.length++;

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__str__instance.length !== 8) {
  $ERROR('#5: var __str__instance = new String("globglob"); __str__instance.length++; __str__instance.length === 8(after redefine length property with using "++"). Actual: __str__instance.length ==='+__str__instance.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

