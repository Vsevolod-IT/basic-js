const CustomError = require("../extensions/custom-error");

module.exports =function createDreamTeam(/* members */) {
	if (!Array.isArray(arguments[0])){
		return false;
	} else {
		let box = arguments[0];
		box = box.filter(i=> typeof(i) === 'string');
		box = box.map(i => i.trim());
		box = box.map(i => i[0][0]);
		box = box.map(i => i.toUpperCase());
		box.sort();
		box = box+'';
		box = box.replace(/,/g,'');
		return box;};

};
