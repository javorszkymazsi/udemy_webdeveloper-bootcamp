var howManySquares = 6;
var squares = [];

generateRandomSquares();
var selectedColor = selectColor();
assessUserGuess();

document.querySelector("#newColors").addEventListener("click", function() {
	document.querySelector("#newColors").textContent = "New colors";
	document.querySelector("#correct").textContent = "";
	resetGame();
});

document.querySelector("#easy").addEventListener("click", function() {
	document.querySelector("#hard").classList.remove("selected");
	document.querySelector("#easy").classList.add("selected");
	putSquaresBackToDefault();
	disableBottomRowButtons();
	howManySquares = 3;
	resetGame();
});

document.querySelector("#hard").addEventListener("click", function() {
	document.querySelector("#easy").classList.remove("selected");
	document.querySelector("#hard").classList.add("selected");	
	putSquaresBackToDefault();
	howManySquares = 6;
	resetGame();
});

//*******************************************************************//
function generateRandomSquares() {
	for (var i = 0; i < howManySquares; ++i) {
		squares.push(document.querySelectorAll(".square")[i]);
		squares[i].style.backgroundColor = generateRandomColor();
		squares[i].style.display = "block";
	}	
}

function generateRandomColor() {
	var red = getRandomInt(0, 255);
	var green = getRandomInt(0, 255);
	var blue = getRandomInt(0, 255);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function selectColor() {
	var selectedIndex = getRandomInt(0, howManySquares - 1);
	var selectedSquare = squares[selectedIndex];	
	document.querySelector("#pickedColor").textContent = squares[selectedIndex].style.backgroundColor;
	return selectedSquare;
}

function assessUserGuess() {
	for (var i = 0; i < squares.length; ++i) {
		squares[i].addEventListener("click", clickEvent);
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame() {
	generateRandomSquares();
	selectedColor = selectColor();
	assessUserGuess();
}

function putSquaresBackToDefault() {
	squares.forEach(function(item) {
		item.style.display = "none";
	});
	squares = [];
}

function disableBottomRowButtons() {
	for (var i = 3; i < squares.length; ++i) {
		squares[i].removeEventListener("click", clickEvent);
	}
}

function clickEvent() {
	if (this === selectedColor) {
		squares.forEach(function(item) {
			item.style.backgroundColor = selectedColor.style.backgroundColor;
		});
		document.querySelector("#correct").textContent = "Correct!";
		document.querySelector("h1").style.backgroundColor = selectedColor.style.backgroundColor;
		document.querySelector("#newColors").textContent = "Play again?";
	} else {
		this.style.backgroundColor = "#232323";
		document.querySelector("#correct").textContent = "Try again";
	}
}