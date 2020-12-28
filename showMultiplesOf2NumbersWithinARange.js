/*Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
NOTICE:
Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, 
check the tests, it differs in each translation*/

// Javascript: return multiples into an array
// s1 * s1 && s2 * s2 
// if number % s1 === 0 && number % s2 === 0 print result

function multiples(s1,s2,s3){
  let result = [];
  let number = 1;
  while(number < s3) {
    if (number % s1 === 0 && number % s2 === 0){
      result.push(number)
    }
    number++;
  }
  return result;
}

/* Sample Tests:
describe("Solution", function(){
    it("should test for s1=2 s2=4 s3=40", function(){
      s1=2;s2=4;s3=40;
      Test.assertSimilar(multiples(s1,s2,s3), [4, 8, 12, 16, 20, 24, 28, 32, 36]);
    });
  });
  
  describe("Solution", function(){
    it("should test for s1=13 s2=5 s3=800", function(){
      s1=13;s2=5;s3=800;
      Test.assertSimilar(multiples(s1,s2,s3), [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);
    });
  });
  
  describe("Solution", function(){
    it("should test for s1=13 s2=15 s3=800", function(){
      s1=13;s2=15;s3=800;
      Test.assertSimilar(multiples(s1,s2,s3), [195, 390, 585, 780]);
    });
  });
  */