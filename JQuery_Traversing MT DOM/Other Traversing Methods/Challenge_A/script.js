$(document).ready(function(){
 // put your code here
 
	/* When a coloured panel is clicked, all panels vanish */
	/* $(".theButton").click(function() {
		$(".container").hide();
	}); */
 
	/* When a coloured panel is clicked, just that panel vanishes */
	$(".theButton").click(function() {
		$(this).hide();
	});
 
	/* When a panel is clicked, all siblings fade to 10% opacity. */
	$(".theButton").click(function() {
		$("#panel .container").siblings().fadeTo(1000, 0.5);
	});
	
	/* When reset is clicked, all panels revert to full opacity. */
	$(".superButton").click(function() {
		$("#panel .container").siblings().fadeTo(1000, 1);
	});
	
	/* When the mouse hovers over a panel, that panel turns black */
	$(".theButton").mouseenter(function() {
		$(this).addClass("makeBlack");
	});
 
	/* When the mouse moves away, the panel reverts back to its previous colour */
	$(".theButton").mouseleave(function() {
		$(this).removeClass("makeBlack");
	});
	
});