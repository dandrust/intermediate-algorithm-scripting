
function uniteUnique(arr) {

  // Use spread operator to convert arguments to array, and flatted
  // by concatenating on array to the next using reduce() method
  var arr = [...arguments].reduce(function(a, b){
    return a.concat(b);
  },[]);

  // filter array by checking if the value is unique...
  // (if value is found using indexOf in slice of array occuring
  // before the value, or if it isn't and returns -1)
  return arr.filter(function(v, i, a){
    return a.slice(0,i).indexOf(v) === -1;
  });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
