const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date instanceof Date){
		throw new Error();
	} else if (!arguments[0]){
		return 'Unable to determine the time of year!';
	} else {
		
		if (Object.prototype.toString.call(date) !== '[object Date]') {
			throw new Error
		  };

		let d = arguments[0];
		d = d.getMonth();
		let ses = ['winter', 'winter', 'spring', 'spring', 'spring',
			'summer', 'summer', 'summer','autumn','autumn','autumn', 'winter'];
		d = ses[d] +'';
		return d;}
};
