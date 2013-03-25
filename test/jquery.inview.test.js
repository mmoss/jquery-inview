/* Copyright 2012, Murray M. Moss */
jQuery(function($) {
	
	// move the fixture so that we can test for visibility of elements that exist at the VERY top of the page
	var $fixture = $('#qunit-fixture').css({ 
		top: 0, 
		left: 0, 
		opacity: 0
	});

	var bottomVisible = false;
	var multiElTestRuns = 0;

	module('jQuery.inView');

	asyncTest('resolves on load', function() {
		scrollTo(0,0);

		$.when($('#top').inView()).then(function($el){
			equal(bottomVisible, false, "var bottomVisible should be false since the user hasn't scrolled yet");
			ok(true, "$("+$el.selector+").inView() resolves when "+$el.selector+" is in view on load");
			start();
		});
	});

	asyncTest('resolves on scroll', function(){
		var $bot = $('#bottom');

		$.when($bot.inView()).then(function($el){
			ok(true, "$("+$el.selector+").inView() resolves after the window scrolls and "+$el.selector+" comes into view");
			bottomVisible = true;
			equal(bottomVisible, true, "var bottomVisible should be true since the user has scrolled");
			start();
		});
	
		$('html, body').animate({scrollTop: $bot.offset().top}, 100);
	});
	
	asyncTest('resolves only when all elements in view', function(){
		var $els = $('#bottom2, #bottom3, #bottom4');

		$.when($els.inView()).then(function($el){
			++multiElTestRuns;
			ok(true, "$("+$el.selector+").inView() resolves only once after all elements orginally selected with "+$el.selector+" have come into view");
			bottomVisible = true;
			equal(multiElTestRuns, 1, "var multiElTestRuns should be 1, since the callback should only fire when all selected elements have scrolled into view.");
			start();
		});
	
		$('html, body').animate({scrollTop: $($els[$els.length -1]).offset().top}, 100);
	});

	QUnit.done = function(){
		$fixture.attr('style', '');
	};
});