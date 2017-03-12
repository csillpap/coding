$(document).ready(function() {
	
	$("th").click(function() {
		$("tr").children().removeClass("highlight");
		$(this).siblings().addClass("highlight");
	});
	
});