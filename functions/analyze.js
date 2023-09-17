export default function analyze(nums) {
	let length = nums.length;
	let totalSum = 0;
	let min = null;
	let max = null;

	for (let i = 0; i < nums.length; i++) {
		let currNum = nums[i];
		totalSum += currNum;
      min = (min == null) ? currNum : Math.min(currNum, min)
      max = (max == null) ? currNum : Math.max(currNum, max)
	}

	let avg = totalSum / length;
	let analyzedInfo = {};
	analyzedInfo["average"] = avg;
	analyzedInfo["min"] = min;
	analyzedInfo["max"] = max;
	analyzedInfo["length"] = length;

	return analyzedInfo
}

// calculate total, use that for avg
// get min max after looping through entire array(nums)
// length find at start
