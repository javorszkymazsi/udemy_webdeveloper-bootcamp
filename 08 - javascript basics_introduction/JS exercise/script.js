var age = Number(prompt("How old are you?"));

if (age < 0) {
	console.log("Your age cannot be a negative number.");
} else if (age === 21) {
	console.log("Happy 21st birthday!");
} else if (age % 2 !== 0) {
	console.log("Your age is odd.");
} else if (age % Math.sqrt(age) === 0) {
	console.log("You have a perfect square age!");
} else {
	console.log("You have a boring age, sorry.");
}