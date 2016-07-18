function addTogether() {
	var args = [...arguments];
	var adder = function(y){
		if (typeof y !== 'number'){
			return undefined;
		} else {
			return args[0] + y;
		}

	};


	if ((args.length === 1 && typeof args[0] !== 'number') || (args.length === 2 && (typeof args[0] !== "number" || typeof args[1] !== "number"))) {
		return undefined;
	} else if (args.length === 1) {
		return adder;
	} else {
		return args.reduce(function(a, b){return a + b;});
	}

}
