/*
Task
Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

Notes
Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

Digit Duplications could occur , So also consider it when forming the Largest
*/

// return the max number from numbers given
// ex. 153 => 531
// ex. 4468 => 8644
// make n an aray
// sort through array - max -> min
// return number

function maxNumber(n){
    return parseInt(n.toString().split('').sort().reverse().join(''))
  }
  

// sample test
/* 
describe("Basic tests",_=>{
  Test.assertEquals(maxNumber(213), 321);
  Test.assertEquals(maxNumber(7389), 9873);
  Test.assertEquals(maxNumber(63792), 97632);
  Test.assertEquals(maxNumber(566797), 977665);
  Test.assertEquals(maxNumber(1000000), 1000000);
});
*/