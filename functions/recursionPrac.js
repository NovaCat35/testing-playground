// --- USE QUOKKA.js TO TEST EM OUT! --- //

function sumRange(n) {
	if (n <= 1) {
		return 1;
	}
	return n + sumRange(n - 1);
}

// let output = sumRange(3)
// console.log(output)

function power(n, pow) {
	if (pow == 0) {
		return 1;
	}
	return n * power(n, pow - 1);
}

// let output = power(3,2)
// console.log(output)

function fact(n) {
	if (n <= 1) {
		return 1;
	}
	return n * fact(n - 1);
}

// let output = fact(5)
// console.log(output)

function all(array, cb) {
	if (array.length == 0) {
		return true;
	}
	if (cb(array[0])) {
		return all(array.slice(1, array.length), cb);
	} else {
		return false;
	}
}

// let allAreLessThanSeven = all([1,2,8], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven);

function productOfArray(array) {
	if (array.length === 0) {
		return 1;
	}
	return array[0] * productOfArray(array.slice(1, array.length));
}

// var six = productOfArray([1,2,3])
// console.log(six)

function contains(obj, value) {
	// if(obj === value) {
	//    return true
	// }
	// for(let subDirectory of Object.values(obj)){
	//    return contains(subDirectory, value)
	// }
	// return false
	for (key in obj) {
		if (obj[key] == value) {
			return true;
		}
		if (typeof obj[key] == "object") {
			return contains(obj[key], value);
		}
	}
	return false;
}

var nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(hasIt, doesntHaveIt);

function totalIntegers(array) {
	if (array.length === 0) {
		return 0;
	}
	let total = 0;
	for (element of array) {
		if (typeof element == "number") {
			total += 1;
		} else if (Array.isArray(element)) {
			total += totalIntegers(element);
		}
	}
	return total;
}

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven)

function SumSquares(array) {
	if (array.length === 0) {
		return 0;
	}
	let total = 0;
	for (let element of array) {
		// Use 'let' to declare 'element'
		if (Array.isArray(element)) {
			total += SumSquares(element);
		}
		total += element * element;
	}
	return total;
}
// var l = [1,2,3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

function replicate(times, number) {
	if (times <= 0) return [];
	return [number].concat(replicate(times - 1, number));
}
// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []
