$(document).ready(function() {
	// listen for submit when user clicks button
		// prevent form submission
	$('form').on('submit', function(e) {
		e.preventDefault();
		var city = $('#city-type').val().toLowerCase();

		if (city === 'new york city' || city === 'new york' || city === 'nyc') {
			$('body').attr('class', 'nyc');
			// $('body').css('background', 'url(./images/nyc.jpg');
		}

		if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
			$('body').attr('class', 'sf');
		}

		if (city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').attr('class', 'la');
		}

		if (city === 'austin' || city === 'atx') {
			$('body').attr('class', 'austin');
		}

		if (city === 'syd' || city === 'sydney') {
			$('body').attr('class', 'sydney');
		}

	});

});