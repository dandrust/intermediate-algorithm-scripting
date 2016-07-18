function binaryAgent(str) {

	str = str.split(" ");

	str.forEach(function (val, index) {

		str[index] = parseInt(val, 2);
		str[index] = String.fromCharCode(str[index]);
	});

	return str.join("");
}
