const CustomError = require("../extensions/custom-error");

module.exports =function transform(arr) {
	if (!Array.isArray(arr)){
		throw  Error();
	}
	let arr_cp = [];

	if(!arr.length){
		return arr_cp;
	}
	let reg = /^--/g; 
	for (let i = 0; i < arr.length; i++){
		switch (arr[i]){
			case '--discard-next':
				i++;
				break;
			case '--double-next':
				if(i < arr.length-1){
					arr_cp.splice(i+1,0,arr[i+1]);
					
					break;
				} else {
					break;
					}
			case '--discard-prev':
				if(i > 1  && arr[i-2] !== '--discard-next'){
					arr_cp.pop();
					break;
				} else {
					break;
				}
			case '--double-prev':
				if(i > 1 && arr[i-2] !== '--discard-next'){
					arr_cp.splice(i-1,0,arr[i-1]);
					break;
				} else {
					break;
				}
			default:
				arr_cp.push(arr[i]);
		}
	}
	return arr_cp;
};

