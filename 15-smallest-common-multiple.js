function smallestCommons(arr) {

    var min = 0;
    var max = 0;
  // Determine high and low number in given array
	if (arr[0] > arr[1]) {
		max = arr[0];
		min = arr[1];
	} else {
		max = arr[1];
		min = arr[0];
	}

	// create two arrays of range
	var rangeArr = [];
	var factorArr = [];
	for (i = min; i <= max; i++) {
		factorArr.push(i);
	}
	var deleteLog = [];

	for (product = max; product >= 1; product--) {
			for (factorInd = 0; factorInd < factorArr.indexOf(product); factorInd++) {
				if (product % factorArr[factorInd] === 0) {
					//console.log(factorArr[factorInd] + " is a factor of " + product + ". Adding to removeLog now.");
					if (deleteLog.indexOf(factorArr[factorInd]) === -1) {
						deleteLog.push(factorArr[factorInd]);
					}
				}
			}

	}

	deleteLog.forEach(function(val){
		factorArr.splice(factorArr.indexOf(val),1);
	});

	for (x = 2; /*x < 50*/ ; x++) {
		var resultArr = [];
		factorArr.forEach(function(val){
			resultArr.push((factorArr[factorArr.length - 1] * x) % val === 0);
		});

		if (resultArr.reduce(function(a, b){return a && b;})) {
			return factorArr[factorArr.length - 1] * x;
			}

	}
}
