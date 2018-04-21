$(function() {
	var parallax;
	$(document).on('scroll', function() {
		parallax = parallax || $('.bg-building,.bg-careers,.bg-news');
		parallax.each(function(idx, el) {
			var $el = $(el);
			$el.css('background-position-x',
				$el.hasClass('bg-building')
				? ~~Math.min($el.offset().top / 8 - $(window).scrollTop() / 2, 0)
				: ~~Math.min($el.offset().top / 8 - $(window).scrollTop() / 4.5, 0)
			);
		});
	}).trigger('scroll');
});
