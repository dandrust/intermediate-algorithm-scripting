//noprotect
function sumPrimes(num) {

  var primeArr = [];

  function primeCheck(x) {
    console.log("checking for prime: " + x);
    for (j = 2; j < x; j++) {
      console.log(x + "/" + j + "= " + x/j);
      if (x % j === 0){
        console.log("not prime!");
        return false;
      } // end if

    } //end while

    console.log("prime!");
    return j > 1;
  }

  for (i = 2; i < num + 1; i++) {
    console.log("sending " + i + "for prime check...");
    if (primeCheck(i)) {
      primeArr.push(i);
    }
  }

  return primeArr.reduce(function(a, b){
    return a + b;
  });
}
