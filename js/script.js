$(document).ready(function() {
    //Prepends List Items

    var items = {};

	$("button").click(function(event) { 
		event.preventDefault();
	var name = $("input").val();

    var openLi = "<li class='new-item'>";
    var deleteIcon = "<i class='fa fa-times'></i>";
    var checkOrUndoIcon = "<i class='fa fa-check-circle fa-lg check-or-undo' data-value='"+ name +"'></i>";
    var closeLi = "</li>";
    
    items[name] = false;

		$("ul").prepend(openLi + name + deleteIcon + checkOrUndoIcon + closeLi);
		$(".fa-times, .fa-check-circle").hide();
		$("input").val("");
	});

	$("ul").on("mouseover", "li.new-item", function() {
		$(this).children().show();
	});

	$("ul").on("mouseleave", "li.new-item", function() {
		$(this).children().hide();
	});

	// Check and Uncheck Functions

	$("ul").on("click", ".check-or-undo", function(event) {
    var element = $(this);
    var name = element.data('value');
    
    element.parent().toggleClass("checked");
    element.toggleClass("fa-check-circle");
    element.toggleClass("fa-undo");

    items[name] = !items[name];
	});

	$("ul").on("click", ".fa-times", function() {
		$(this).parent().hide();
	});
});

// deleting item in a object javascript




	

	// $("ul").prepend("<li class='new-item'>" + $("input:first").val() + "<i class='fa fa-check-circle fa-lg undo' data-value=''>"+ $("input:first").val()">" + "</i>" + "<i class='fa fa-times fa-lg'>" + "</i>" + "</li>");


	// $("ul").on("click", ".fa-check-circle", function(e) {
	// 	var element = $(e.currentTarget);
	// 	var dataValue = element.data("value");
	// 	var isChecked = items[dataValue];

	// 	if (isChecked) {
	// 		console.log("isChecked");
	// 	}
	// 	else {
	// 		$(this).parent().addClass("checked");
	// 	};
	// 	isChecked;
	// 	isChecked = !isChecked;
	// });

	// $("ul").on("click", ".undo", function(e) {
	// var element = $(e.currentTarget);
	// var name = element.data('value');
	// var isChecked = items[name];

	// if (isChecked) {
	//   $(this).parent().removeClass("checked");
	// } else {
	//   $(this).parent().addClass("checked");
	//   $(this).removeClass("fa-check-circle");
	//   $(this).addClass("fa-undo");

	// }
	// items[name] = !items[name];
	// });


