$(function() {
	var parallax;
	$(document).on('scroll', function() {
		parallax = parallax || $('.bg-building');
		parallax.each(function(idx, el) {
			var $el = $(el);
			var data = $el.data('bgimg');
			if (!data) {
				var imageSrc = $el.css('background-image').replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
				var image = new Image();
				image.src = imageSrc;
				data = {
					width: image.width
				};
				$el.data('bgimg', data);
			}
			$(el).css('background-position-x', Math.min($el.offset().top / 8 - $(window).scrollTop() / 2, 0));
		});
	}).trigger('scroll');
});
