var howManySquares = 6;
var squares = [];
var modeButtons = document.querySelectorAll(".mode");
var score = 0;
var clickCount = 0;

for (var i = 0; i < modeButtons.length; ++i) {
	modeButtons[i].addEventListener("click", function() {
		for (var j = 0; j < modeButtons.length; ++j) {
			if (i !== j) {
				modeButtons[j].classList.remove("selected");
			}
		}		
		this.classList.add("selected");
		putSquaresBackToDefault();
		if (document.getElementById("easy") === this) {
			howManySquares = 3;
		} else if (document.getElementById("hard") === this) {
			howManySquares = 6;
		} else if (document.getElementById("superHard") === this) {
			howManySquares = 9;
		}
		resetGame();
	})
}

document.querySelector("#score").textContent = score;
generateRandomSquares();
var selectedColor = selectColor();
assessUserGuess();

document.querySelector("#newColors").addEventListener("click", function() {
	document.querySelector("#newColors").textContent = "New colors";
	document.querySelector("#correct").textContent = "";
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

function freezeSquares() {
	for (var i = 0; i < squares.length; ++i) {
		squares[i].removeEventListener("click", clickEvent);		
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame() {
	clickCount = 0;
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

function clickEvent() {
	++clickCount;
	if (this === selectedColor) {
		squares.forEach(function(item) {
			item.style.backgroundColor = selectedColor.style.backgroundColor;
		});
		if (clickCount === 1) {
			score += 10;
		} else if (clickCount === 2 && howManySquares !== 3) {
			score += 5;
		} else if (clickCount === 3 && howManySquares !== 3) {
			++score;
		}
		document.querySelector("#score").textContent = score;
		document.querySelector("#correct").textContent = "Correct!";
		freezeSquares();
		document.querySelector("h1").style.backgroundColor = selectedColor.style.backgroundColor;
		document.querySelector("#newColors").textContent = "Play again?";
	} else {
		this.style.backgroundColor = "#232323";
		document.querySelector("#correct").textContent = "Try again";
	}
}