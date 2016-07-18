
function pairElement(str) {

  var sourceArr = str.split("");
  var returnStr = [];

  sourceArr.forEach(function(val){

    if (val === "G") {
      returnStr.push(["G","C"]);
    } else if (val === "C") {
      returnStr.push(["C","G"]);
    } else if (val === "A") {
      returnStr.push(["A","T"]);
    } else if (val === "T") {
      returnStr.push(["T","A"]);
    }

  });


  return returnStr;
}

pairElement("ATCGA");
