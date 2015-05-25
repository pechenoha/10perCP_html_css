/* 
 * author: Vadym Pechenoha
 * We are calling check of width at 2 points:
 * 1. when page is loading
 * 2. when user resizes the window
 */

$(window).load(function(){
	checkWindowWidth();
});
$(window).resize(function () {
	checkWindowWidth();
});

function checkWindowWidth () {
	var width = 0;
	width = $(window).width();
	if (width < 960) {
		$("body").css("width", 960);
	} else {
		$("body").css("width", width);
	}
	console.log(width);
}
