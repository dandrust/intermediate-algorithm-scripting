function myReplace(str, before, after) {

  if (before !== before.toLowerCase()) {
    var strArr = after.split("");
    strArr.unshift(strArr[0].toUpperCase());
    strArr.splice(1, 1);
    after = strArr.join("");
  }

  return str.replace(before, after);
}
