$(document).ready(function(){
 // put your code here
 
	$(".theButton").click(function() {
		var col = $(this).css('background-color');
		$('.superButton').text( col);
	});
 
});