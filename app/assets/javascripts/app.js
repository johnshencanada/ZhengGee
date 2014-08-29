$(window).scroll(function(event) {
	var topPosition = $(window).scrollTop();
	console.log(topPosition);

	if (topPosition >= 750  && topPosition < 900) {
		var degrees = (900 - topPosition)/100;
		if (degrees >= 0.6) { 
			scale(degrees,degrees);
		}
	}

	if (topPosition >= 840  && topPosition < 900) {
		var degrees = (topPosition - 840)*2.5;
		rotate_bulb (-degrees);
	}


	if (topPosition >= 1300) {
		var degrees = topPosition - 1300;
		rotate(degrees);
	}

	if (topPosition >= 2196) {
		$(".status-bar").addClass('animate');
	}

	function scale(x, y) {
		$("#lightbulb").css({
		  '-webkit-transform' : 'scale('+degrees+','+degrees+')',
		     '-moz-transform' : 'scale('+degrees+','+degrees+')',  
		      '-ms-transform' : 'scale('+degrees+','+degrees+')',  
		       '-o-transform' : 'scale('+degrees+','+degrees+')',  
		          'transform' : 'scale('+degrees+','+degrees+')',  
		               'zoom' : 1
		});
	}

	function rotate_bulb (degrees) {
		$("#lightbulb").css({
		  '-webkit-transform' : 'rotate('+degrees+'deg)',
		     '-moz-transform' : 'rotate('+degrees+'deg)',  
		      '-ms-transform' : 'rotate('+degrees+'deg)',  
		       '-o-transform' : 'rotate('+degrees+'deg)',  
		          'transform' : 'rotate('+degrees+'deg)',  
		               'zoom' : 1
		});
	}

	function move (degrees) {
		console.log("Moving");
		$("#lightbulb").css({
		  '-webkit-transform' : 'rotate('+degrees+'deg)',
		     '-moz-transform' : 'rotate('+degrees+'deg)',  
		      '-ms-transform' : 'rotate('+degrees+'deg)',  
		       '-o-transform' : 'rotate('+degrees+'deg)',  
		          'transform' : 'rotate('+degrees+'deg)',  
		               'zoom' : 1
		});
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

