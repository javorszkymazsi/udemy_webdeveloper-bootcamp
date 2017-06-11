var weAreThere1 = "yes";
var weAreThere2 = "yeah";

var userAnswer = "no";
while (userAnswer.indexOf(weAreThere1) === -1 && userAnswer.indexOf(weAreThere2) === -1) {
	userAnswer = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");