/*Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd
*/

/*another one i was not able to get the answer for*/

function menFromBoys(arr){
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}

/* Sample Test
describe("Basic tests",_=>{
    Test.assertSimilar(menFromBoys([7,3,14,17]), [14,17,7,3]);
    Test.assertSimilar(menFromBoys([2,43,95,90,37]), [2,90,95,43,37]);
    Test.assertSimilar(menFromBoys([20,33,50,34,43,46]), [20,34,46,50,43,33]);
    Test.assertSimilar(menFromBoys([82,91,72,76,76,100,85]), [72,76,82,100,91,85]);
    Test.assertSimilar(menFromBoys([2,15,17,15,2,10,10,17,1,1]), [2,10,17,15,1]);
    Test.assertSimilar(menFromBoys([-32,-39,-35,-41]), [-32,-35,-39,-41]);
    Test.assertSimilar(menFromBoys([-64,-71,-63,-66,-65]), [-66,-64,-63,-65,-71]);
    Test.assertSimilar(menFromBoys([-94,-99,-100,-99,-96,-99]), [-100,-96,-94,-99]);
    */