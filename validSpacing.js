/*Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

'Hello world' = true
' Hello world' = false
'Hello world  ' = false
'Hello  world' = false
'Hello' = true
// Even though there are no spaces, it is still valid because none are needed
'Helloworld' = true 
// true because we are not checking for the validity of words.
'Helloworld ' = false
' ' = false
'' = true */

function validSpacing(s) {
  if (s == "")
    return true
  else
    return !s.split(" ").includes("")

    /*
    const chai = require("chai");
const assert = chai.assert;
// chai.config.truncateThreshold=0;

describe("Fixed Tests", function() {
  it("Testing 'Hello world'",function (){
    assert.strictEqual(validSpacing('Hello world'), true);
  });
  it("Testing ' Hello world'", function(){
    assert.strictEqual(validSpacing(' Hello world'), false);
  });
  it("Testing 'Hello  world '", function(){
    assert.strictEqual(validSpacing('Hello  world '), false);
  });
  it("Testing 'Hello'", function(){
    assert.strictEqual(validSpacing('Hello'), true);
  });
  it("Testing 'Helloworld'", function(){
    assert.strictEqual(validSpacing('Helloworld'), true);
  });
});
*/