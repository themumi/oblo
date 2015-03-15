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


$(function(){

$('a[href*=#]').click(function() {

if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {

var $target = $(this.hash);

$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

if ($target.length) {

var targetOffset = $target.offset().top;

$('html,body').animate({scrollTop: targetOffset}, 2500);

return false;

}

}

});

});
