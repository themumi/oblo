jQuery.fn.topLink = function(settings) {
	settings = jQuery.extend({
		min: 1,
		fadeSpeed: 200
	}, settings);
	return this.each(function() {
		var el = $(this);
		el.hide(); 
		$(window).scroll(function() {
			if($(window).scrollTop() &gt;= settings.min)
			{
				el.fadeIn(settings.fadeSpeed);
			}
			else
			{
				el.fadeOut(settings.fadeSpeed);
			}
		});
	});
};

$(document).ready(function() {
	$(&#39;#top-link&#39;).topLink({
		min: 300,
		fadeSpeed: 500
	});
	$(&#39;#top-link&#39;).click(function(e) {
		e.preventDefault();
		$.scrollTo(0,300);
	});
});
