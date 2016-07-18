function fearNotLetter(str) {
  var charCode = str.charCodeAt(0);
  strArr = str.split("");

  for (i = 0; i < strArr.length; i++) {
    if (strArr[i].charCodeAt(0) !== charCode) {
      return String.fromCharCode(charCode);
    }
      charCode ++;
  }

  return undefined;
}
