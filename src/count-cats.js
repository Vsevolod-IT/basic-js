const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/*matrix*/) {
	let res;
	let cat = [];
	let matrix= Array.from(arguments);
	matrix = matrix.toString().split(',');
	cat = matrix.filter(matrix => matrix === '^^');
	res = cat.length;
	return res;
};
