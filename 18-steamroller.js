
function steamrollArray(arr) {

	var flatArr = [];

	function getValue(arr) {
		if (!Array.isArray(arr)){
			flatArr.push(arr);
		} else if (!Array.isArray(arr[0])) {
			flatArr.push(arr[0]);
		} else {
			getValue(arr[0]);
		}
	}

	function parseArray(arr) {
		arr.forEach(function(val, index){
			if (Array.isArray(val) && val.length > 1) {
				parseArray(arr[index]);
			} else if (Array.isArray(val) && val.length < 1) {
			} else {
				getValue(val);
			}

		});
	}

	parseArray(arr);
    return flatArr;

}
