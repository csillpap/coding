$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	/* will change the color of paragraphs to red when clicked on */
	$("p").click(function() {
		$("p").addClass("change_color_of_p");
	});
	
	/*  will change the background-color of h2 to lightblue when hovered over*/
	$("h2").mouseenter(function() {
		$("h2").addClass("hover_over_h2");
	})
	
	/* will remove the lightblue color from h2 when the mouse moves outside the h2 */
	$("h2").mouseleave(function() {
		$("h2").removeClass("hover_over_h2");
	})
	
	/* will change the color of the page to black when mouse hovered over Button */
	$(".bottom_button").mouseenter(function() {
		$("body").addClass("change_color_of_page");
	})
	
	/* will change the color of the page to grey when mouse leaves Button */
	$(".bottom_button").mouseleave(function() {
		$("body").removeClass("change_color_of_page");
	})
	
	/* will change the font-size of only that h2 which the mouse is hovered over */

	$("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
	});
	$("#hr_html").mouseleave(function() {
		$("#hr_html").removeClass("h2_font_size");
	});

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });
	$("#hr_mysql").mouseleave(function() {
		$("#hr_mysql").removeClass("h2_font_size");
	});

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });
	$("#hr_python").mouseleave(function() {
		$("#hr_python").removeClass("h2_font_size");
	});

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });
	$("#hr_jquery").mouseleave(function() {
		$("#hr_jquery").removeClass("h2_font_size");
	});

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });
	$("#hr_django").mouseleave(function() {
		$("#hr_django").removeClass("h2_font_size");
	});

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });
	$("#hr_css").mouseleave(function() {
		$("#hr_css").removeClass("h2_font_size");
	});

	/* Challenge A - makes the button hide when clicked */
	$("#button1").click(function() {
		$("#button1").hide("slow");
	});
	
	/* Challenge B - the paragraph will vanish when the button is clicked and reappear when clicked again */
	$("#button2").click(function() {
		$("#mysql_paragraph").toggle(500);
	});
	
	/* Challenge C - use slideToggle to show or hide the paragraph */
	$("#button3").click(function() {
		$("#python_paragraph").slideToggle(500);
	});
	
	/* Challenge D - fade to 50% opacity on mouseenter and fade back to 100% on mouseleave */
	$("#button4").mouseenter(function() {
		$("#button4").fadeTo(1000, 0.5);
	});
	$("#button4").mouseleave(function() {
		$("#button4").fadeTo(1000, 1);
	});
	
}); 
