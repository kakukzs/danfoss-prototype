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
			//console.log(rect.top);
			$(el).css('background-position-x', -$(window).scrollTop());
		});
	}).trigger('scroll');
});
