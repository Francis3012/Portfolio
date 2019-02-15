$(document).ready(function() {
	$(".navbar a, footer a[href='#home']").on('click', function(event) {
		event.preventDefault();

		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 100,
			},
			600,
			function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			},
		);
	});
	$window = $(window);

	$('[data-type="background"]').each(function() {
		var $scroll = $(this);

		$(window).scroll(function() {
			var yPos = -(($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));

			// background position
			var coords = '50% calc(50% + ' + yPos + 'px)';

			// move the background
			$scroll.css({
				backgroundPosition: coords,
			});
		});
	});
});
