
function translatePigLatin(str) {
  var vowels = [];
  vowels.push(str.indexOf("a"));
  vowels.push(str.indexOf("e"));
  vowels.push(str.indexOf("i"));
  vowels.push(str.indexOf("o"));
  vowels.push(str.indexOf("u"));

  var lowIndex = 0;
  var compare = str.length + 1;
  vowels.forEach(function(val, i){
    if (val < compare && val > -1) {
      lowIndex = i;
      compare = val;
    }
  });

  var spliceEnd = null;

  if (lowIndex === 0) {
    spliceEnd = str.indexOf("a");
  } else if (lowIndex === 1) {
    spliceEnd = str.indexOf("e");
  } else if (lowIndex === 2) {
    spliceEnd = str.indexOf("i");
  } else if (lowIndex === 3) {
    spliceEnd = str.indexOf("o");
  } else if (lowIndex === 4) {
    spliceEnd = str.indexOf("u");
  }


  if (spliceEnd === 0) {
    str = str + "way";
  } else {
    str = str.substr(spliceEnd) + str.slice(0, spliceEnd) + "ay";
  }

  return str;

}
