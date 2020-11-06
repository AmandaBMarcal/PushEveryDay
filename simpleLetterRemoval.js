//sort || filter the array
//split it at each letter
//slice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//array.replace

function solve(s, k){
  let sortedVar = s.split("").sort().slice(0,k)
  console.log(sortedVar)
  for(let i=0; i<sortedVar.length; i++) s=s.replace(sortedVar[i],"");
  console.log(s)
  return s;
}