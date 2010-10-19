// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.4_D2.5;
 * @section: 8.4, 15.5, 7.8.4;
 * @assertion: Engines implements array like access to string elemenths,
 * If index of elementh is less than 0 an undefined returns;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#
str='asdfghjkl';

var char__ =str[-1];
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof char__!== 'undefined') {
  $ERROR('#1: If index of elementh is less than 0 an undefined returns');
}
//
//////////////////////////////////////////////////////////////////////////////

var __char =str[-5];

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof char__!== 'undefined') {
  $ERROR('#2: If index of elementh is less than 0 an undefined returns');
}
//
//////////////////////////////////////////////////////////////////////////////
