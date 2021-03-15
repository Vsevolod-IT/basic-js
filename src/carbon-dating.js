const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
	return nn(arguments[0])
};

function nn(){
	let samp = arguments[0];
	let check_2 = /\d+\.\d+/g;
	let check_1 = /^\d+$/;
	if ((typeof(samp) === 'string') &&  (check_1.test(samp) || check_2.test(samp))){
		if (samp < 1 || samp > 15){
			return false;}
		let res = Math.log(MODERN_ACTIVITY/samp)/ 0.00012094240837696334;
		res = Math.ceil(res);
		return res;
	} else {
		return false;}
}