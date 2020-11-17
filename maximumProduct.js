// create a variable to hold the max product
// loop through array 
// muliply every adjacent #
// check if new # is higher than max product you reassign the current max product to the new max product 
// return max product

function adjacentElementsProduct(array) {
  let maxProduct=0
  if(array.length>1) {
    maxProduct = array[0] * array[1]
  }
  for(let i=0; i<array.length-1; i++) {
    if(array[i] * array[i+1] > maxProduct) {
      maxProduct  = array[i] * array[i+1]
    }
  }
  return maxProduct;
}