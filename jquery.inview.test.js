/* Copyright 2011, Murray M. Moss */
jQuery(function($) {
	var $fixture = $('#qunit-fixture').css({
		top: 0, left: 0, opacity: 0
	});

	var bottomVisible = false;

	module('jQuery.inView');

	asyncTest('on load', function() {
		scrollTo(0,0);
		$.when($('#top').inView()).then(function($el){
			equal(bottomVisible, false, "var bottomVisible should not be false since the user hasn't scrolled yet");
			ok(true, "$("+$el.selector+").inView() resolves when "+$el.selector+" is in view on load");
			start();
		});
	});

	asyncTest('on scroll', function(){
		var $bot = $('#bottom');
		$.when($bot.inView()).then(function($el){
			ok(true, "$("+$el.selector+").inView() resolves after the window scrolls and "+$el.selector+" comes into view");
			bottomVisible = true;
			equal(bottomVisible, true, "var bottomVisible should be true since the user has scrolled");
			start();
		});
	
		$('html, body').animate({scrollTop: $bot.offset().top});
	});

	QUnit.done = function(){
		$fixture.attr('style', '');
	};
});