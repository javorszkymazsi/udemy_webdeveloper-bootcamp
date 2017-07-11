$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		$("#todoList").append("<li><span>X</span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", "li span", function(event) {
	$("#doneList").append("<li>" + $(this).parent().text() + "</li>");
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});