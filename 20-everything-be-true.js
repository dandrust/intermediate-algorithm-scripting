function truthCheck(collection, pre) {
  truthArray = [];
  collection.forEach(function(val){
    truthArray.push(val.hasOwnProperty(pre) && !!val[pre]);
  });
  return truthArray.reduce(function(a, b){return a && b;});
}
