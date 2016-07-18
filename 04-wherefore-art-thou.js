function whereAreYou(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);

  sourceKeys.forEach(function(sVal, sIndex){

    collection.forEach(function(cVal, cIndex){

      if (!cVal.hasOwnProperty(sVal) || cVal[sVal] !== source[sVal]) {

        collection[cIndex] = "";

      }

    }); // end collection.forEach()

  }); // end sourceKeys.forEach()

  arr = collection.filter(function(val){
    return typeof(val) == 'object';
  });

  return arr;
}
