nav_open = false;

show("about");

function show(option) {
	console.log("Showing: " + option);

	// Hide content from other tabs and reset nav bar font color
	$("#hamburguer nav h3").css("color", "white");
	$("main > *").css("opacity", "0%");
	$("main > *").hide();

	// Show the selected tab's content and mark it with a different font color
	$("#" + option).show();
	$("main > *").css("opacity", "100%");
	$("#" + option + "Tab").css("color", "#f9c3ee");
}

function sidebar() {
	console.log("Showing sidebar");

	if (nav_open) {
		// $("#hamburguer nav").hide();
		$("#hamburguer nav").css("left", "-10rem");
	} else {
		// $("#hamburguer nav").show();
		$("#hamburguer nav").css("left", "0");
	}

	nav_open = !nav_open;
}
