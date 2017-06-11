var array = [3, -2, 1, 4, 5, 6, 16];
var array1 = [6, 6, 6];
printReverse(array);
console.log(sumArray(array));
console.log(isUniform(array));	
console.log(max(array));

//takes an array as an argument
function printReverse(array) {
	for (var i = array.length - 1; i >= 0; --i) {
		console.log(array[i]);
	}
}

//takes an array as an argument and turns true if all elements are the same
function isUniform(array) {
	var pivot = array[0];	
	for (var i = 1; i < array.length; ++i) {
		if (array[i] !== pivot) {
			return false;
		}
	}
	return true;
}

function sumArray(array) {
	var sum = 0;
	array.forEach(function(item) {sum += item} );
	return sum;
}

//return maximum number of the element
function max(array) {
	var max = array[0];
	array.forEach(function(item) { if (item > max) {max = item} });
	return max;
}