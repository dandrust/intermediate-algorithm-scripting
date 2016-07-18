function convertToRoman(num) {
  var romanNum = [];
  var x = 0;

  //convert to array
  var numArr = (""+num).split("");

  //Shift digit from numArr
  while (numArr.length !== 0) {

    x = numArr.shift();
    convertDigitToNumeral(x, numArr.length + 1);

  }


  function convertDigitToNumeral(num, places) {
    var one = "";
    var five = "";
    var ten = "";
    //Set place values
    if (places === 1) {
      one = "I"; five = "V"; ten ="X";
    } else if (places === 2) {
      one = "X"; five = "L"; ten = "C";
    } else if (places === 3) {
      one = "C"; five = "D"; ten = "M";
    } else if (places === 4) {
      while (num > 0) {
        romanNum.push("M");
        num --;
      }
    }

    if (num == 9) {
      console.log("inside 9");
      romanNum.push(one);
      romanNum.push(ten);
      num -= 9;
    }

    if (num >= 5) {
      romanNum.push(five);
      num -= 5;
    }

    if (num == 4) {
      romanNum.push(one);
      romanNum.push(five);
      num -= 4;
    }

    while (num > 0) {
      romanNum.push(one);
      num --;
    }

  }

  return romanNum.join("");
}
