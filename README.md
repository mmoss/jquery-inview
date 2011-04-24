# jQuery.inView Plugin(ish)

This is a simple plugin I've thrown together for my blog/personal site. Using this plugin I can defer loading disqus scripts for my blog's comments. I also use this to delay the loading of 3rd party scripts (social media updates, etc).

The plugin uses jQuery 1.5's new [Deferred Object](http://api.jquery.com/category/deferred-object/) API.

## Usage Example

	// Add a 3rd party script, 
	// but only when a specific element is in view
	
	var $el = $('#myElement');
	$.when($el.inView()).then(function($el){
		// ... some action
	});

## Dependencies

- [jQuery 1.5](http://www.jquery.com/)
