$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		$("#todoList").append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + $(this).val() + '</li>');
		$(this).val("");
	}
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", "li span", function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$(".fa-plus").on("click", function() {
	$("input").fadeToggle(300);
});