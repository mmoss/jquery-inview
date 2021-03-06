# jQuery.inView Plugin(ish)

[![Build Status](https://travis-ci.org/mmoss/jquery-inview.png?branch=master)](https://travis-ci.org/mmoss/jquery-inview)

This is a simple plugin I've thrown together for my blog/personal site, where I use it to defer the loading of [Disqus](http://disqus.com/) comments. This script can be used to defer the loading of third party plugins, scripts, or anything else you want to do once elements have come into view.

The plugin uses jQuery's [Deferred Object](http://api.jquery.com/category/deferred-object/) API.

## Documentation

$.inView()

- The $.inView() function, when called will return a new jQuery.Deferred object that will resolve once all elements in the jQuery object have come into view.

### Usage Example

```js
$.when($('#myElement').inView()).then(function($el){
  alert($el.attr('id') + ' is now in view');
});
```

Or

```js
$('#myElement').inView(function(){
  alert($(this).attr('id') + ' is now in view');
});
```

## Dependencies

- [jQuery 1.5+](http://www.jquery.com/)
