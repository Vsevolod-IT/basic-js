const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
	let res = {};
	res.turns = 2**arguments[0] - 1;
	res.seconds = res.turns * 3600/arguments[1];
	res.seconds = Math.floor(res.seconds);
	return res;
};
