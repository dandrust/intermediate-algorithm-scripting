function sumAll(arr) {
  var y = Math.max(...arr);
  var x = Math.min(...arr);
  var sumArr = [];
  for (i = x; i < y + 1; i++) {
    sumArr.push(i);
  }

  return sumArr.reduce(function(a, b){
    return a + b;
  });
}
