// check if str == second str
// str.substring

function solution(str, ending){
  if (ending == str.substring(str.length - ending.length)) {
    return true
  } else {
    return false
  }
}

// --------------------

// ternary operator
function solution(str, ending){
    return (ending == str.substring(str.length - ending.length))  ? true : false
  }

// --------------------

const solution = (str, ending) => {
    return str.endsWith(ending)
}


