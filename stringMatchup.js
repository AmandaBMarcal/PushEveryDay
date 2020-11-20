// params = a & b are strings within 2 sets of arrays
// return = returning num of times arr2(a) appears in arr1(b)
// example = 
// arr1 = ['ddd', 'abc', 'xyz']
// arr2 = ['ddc', 'abc', 'xya']
// [abc] appears 1 time
// pseudo = 
// iterate through both arrays
// iterate through strings 


function solve(a,b){
    var dict = {}
    for (i = 0; i < a.length; i++) {
    var word = a[i]
      if (word in dict) {
        dict[word] = dict[word] + 1
      } else {
        dict[word] = 1
      }
    }
    var result = [];
    for (j = 0; j < b.length; j++) {
      var key = b[j]
      if (key in dict) {
        result.push(dict[key])
      } else {
        result.push(0)
      }
    }
    return result
  }