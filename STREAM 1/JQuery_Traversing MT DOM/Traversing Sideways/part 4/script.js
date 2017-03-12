$(document).ready(function() {
 

 	$(".stream").on("click", function() {
		
		var elementId = $(this).attr("id");
        var cardClass = $(".card").attr("class").split(" ")[0];

        if ($("." + elementId).css("background-color") == "rgb(235, 82, 85)") {
            $("." + elementId).css("background-color", "#fff");
        } else {
            $("." + cardClass).css("background-color", "#fff");
            $("." + elementId).css("background-color", "rgb(235, 82, 85)");
        }
	});
	
	/* when a paragraph is clicked, all the links within it are highlighted in yellow */
	$("p").on("click", function() {
		$(this).children("a").css("background-color", "yellow");
	});
	
	/* when a card is clicked on it is highlighted and unhighlighted when clicked again */
	$(".card").on("click", function() {
		$(this).toggleClass("highlightCard");
	});
	
	/* when Select is clicked, all panels disappear except those selected */
	$("#select_btn").click(function(){
		$(".card:not(.highlightCard)").hide();	 
	});
	
	/* clicking on All makes all panels reappear */
	$("#all_btn").click(function(){
		$(".card").show();	 
	});
	
}); 
