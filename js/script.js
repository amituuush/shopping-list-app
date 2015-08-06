$(document).ready(function() {
    
	$("button").click(function(e) { 
		e.preventDefault();
		$("ul").prepend("<li class='new-item'>" + $("input:first").val() + "<i class='fa fa-times'>" + "</i>" + "<i class='fa fa-check-circle fa-lg'>" + "</i>" + "</li>");
		$(".fa-times, .fa-check-circle").hide();
		$("input").val("");
	});

	$("ul").on("mouseover", "li.new-item", function() {
		$(this).children().show();
	});
	$("ul").on("mouseleave", "li.new-item", function() {
		$(this).children().hide();
	});

	// $("li").on("mouseover", function() {
	// 	$(".fa-times, .fa-check-circle").show();
	// })
	// .mouseleave(function() {
	// 	$(".fa-times, .fa-check-circle").hide();
	// });


	// $("li.new-item").mouseover(function() {    why does this one not work and the one above does?
	// 	$("span.icon-container").show();
	// })
	// .mouseleave(function() {
	// 	$("span.icon-container").hide();
	// });

	$("ul").on("click", ".fa-check-circle", function() {
		$(this).parent().addClass("checked");

	});

	$("ul").on("click", ".fa-times", function() {
		$(this).parent().hide();
	});







});