$(window).scroll(function(event) {
	var topPosition = $(window).scrollTop();
	console.log(topPosition);

	if (topPosition >= 1300) {
		var degress = topPosition - 1300;
		rotate(degress);
	}

	if (topPosition >= 2196) {
		$(".status-bar").addClass('animate');
	}

	if (topPosition < 2196) {
	}

	function rotate (degrees) {
		console.log("hi");
		$(".color-wheel").css({
		  '-webkit-transform' : 'rotate('+degrees+'deg)',
		     '-moz-transform' : 'rotate('+degrees+'deg)',  
		      '-ms-transform' : 'rotate('+degrees+'deg)',  
		       '-o-transform' : 'rotate('+degrees+'deg)',  
		          'transform' : 'rotate('+degrees+'deg)',  
		               'zoom' : 1
		});
	}
});

