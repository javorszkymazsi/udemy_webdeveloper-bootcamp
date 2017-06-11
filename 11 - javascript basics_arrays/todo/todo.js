var todos = [];
var userAnswer = prompt("What would you like to do?");

while (userAnswer !== "quit" && userAnswer !== "q") {
	if (userAnswer === "new") {
		addTodo();
	} else if (userAnswer === "list") {
		listTodos();
	} else if (userAnswer === "delete" ) {
		deleteTodo();
	} else {
		printInstructions();
	}
	userAnswer = prompt("What would you like to do?");
}
console.log("You quit the app");

function addTodo() {
	todos.push(prompt("Enter a todo:"));
	console.log("You added " + todos[todos.length - 1] + " to your todo list");
	var addAnother = prompt("Do you want to add another?");		
	while (addAnother === "yes" || addAnother === "yeah") {
		todos.push(prompt("Enter a todo:"));
		console.log("You added " + todos[todos.length - 1] + " to your todo list");
		addAnother = prompt("Do you want to add another?");
	}
}

function listTodos() {
	if (todos.length === 0) {
		console.log("todos array is empty");
	}
	console.log("***************");
	todos.forEach(function(todo) { console.log(todos.indexOf(todo) + 1 + ": " + todo); });		
	console.log("***************");
}

function deleteTodo() {
	var index = Number(prompt("Enter index of todo to delete"));
	console.log("You deleted " + todos[index - 1]);
	todos.splice(index - 1, 1);	
}

function printInstructions() {
	console.log("> You can only ask for new, list or quit.");
	console.log("  > new - Add a Todo");
	console.log("  > list - View All Todos");
	console.log("  > quit - Quit App");
}