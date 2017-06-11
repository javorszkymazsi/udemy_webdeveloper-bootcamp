function isEven(num) {
	return (num % 2 === 0);
}

function factorial(num) {
	if (num === 1 || num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}

console.log(isEven(1));
console.log(isEven(355550));
factorial(2);
factorial(10);
kebabToSnake("kebab-case");
kebabToSnake("honey-money");