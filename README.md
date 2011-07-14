# jQuery.inView Plugin(ish)

This is a simple plugin I've thrown together for my blog/personal site. This script can be used to defer the loading of third party plugins, scripts, or anything else you want to so in a callback.

The plugin uses jQuery 1.5's new [Deferred Object](http://api.jquery.com/category/deferred-object/) API.

## Documentation

$.fn.inView()

- The inView() function, when called on a jQuery object, will return a new jQuery.Deferred object

### Usage Example

	// Add a 3rd party script, 
	// but only when a specific element is in view

	var $el = $('#myElement');
	$.when($el.inView()).then(function($el){
		// ... some action
	});

## Dependencies

- [jQuery 1.5+](http://www.jquery.com/)
