// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

//Add selected class to author

$(document).on("click", ".author", function() {
	$(this).toggleClass("selected");
});

//Style switcher code

$(document).on("click", "#switcher-default", function() {
	$("body").removeAttr("class");
	$("body").addClass("default");
});

$(document).on("click", "#switcher-narrow", function() {
	$("body").removeAttr("class");
	$("body").addClass("narrow");
});

$(document).on("click", "#switcher-large", function() {
	$("body").removeAttr("class");
	$("body").addClass("large");
});

//Toggle chapter visibility

$(document).on("dblclick", ".chapter-title", function() {
	$(this).siblings("p").fadeToggle();
});

//Change body classes on arrow press

var body_classes = ["default", "narrow", "large"];
var current_index = 0;

$(document).on("keydown", function(e) {
	if (e.which === 39) {
		current_index++;

		if (current_index > 2) {
			current_index = 0;
			$("body").removeAttr("class");
		} else {
			$("body").removeAttr("class");
			$("body").addClass(body_classes[current_index]);
		}
	}
});

//Track mousemove

$(document).on("mousemove", "p", function(e) {
	console.log("Page X: " + e.pageX + " Page Y: " + e.pageY);
});

//Track mouse up and down

var downPos;
var upPos;

$(document).on("mousedown", function(e) {
	downPos = e.pageY;
});

$(document).on("mouseup", function(e) {
	upPos = e.pageY;

	if (downPos > upPos) {
		$("p").addClass("hidden");
	} else {
		$("p").removeClass("hidden");
	}
});

//Color changer

$(document).on("click", "#color-red", function() {
	$("body").toggleClass("red-font");
});

$(document).on("click", "#color-blue", function() {
	$("body").toggleClass("blue-font");
});

