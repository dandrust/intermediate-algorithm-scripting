function sumFibs(num) {

  var fibArr  = [1,1];

  while (fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1] <= num) {

    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
    console.log(fibArr);
  }

  return fibArr.reduce(function(a, b){
    if (b % 2 !== 0) {
      return a + b;
    } else {
      return a;
    }
  });

}
