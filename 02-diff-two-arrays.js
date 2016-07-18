function diffArray(arr1, arr2) {
  var newArr = [];
  var sharedArr = [];

  sharedArr = arr1.filter(function(val){
    return arr2.indexOf(val) !== -1;
  });

  newArr = arr1.concat(...arr2).filter(function(val){
    return sharedArr.indexOf(val) === -1;
  });

  return newArr;
}
