/* Copyright 2011, Murray M. Moss */
(function($, w){
	var $w = $(w),
		queue = [],
		interval = null;

	function inView($el) {
		var viewTop = $w.scrollTop(),
			viewBtm = viewTop + $w.height(),
			elTop = $el.offset().top,
			elBtm = elTop + $el.height();

		return elBtm >= viewTop && elTop <= viewBtm;
	}

	function resolve() {
		if(queue.length > 0){
			var i;
			for(i=queue.length-1; i>=0; i--) {
				var itm = queue[i];

				if(inView(itm.target)) {
					itm.deferred.resolve(itm.target);
					queue.splice(i, 1);
				}
			}

			if(queue.length < 1) {
				w.clearInterval(interval);
				interval = null;
			}
		}
	}

	$.fn.inView = function(){
		var $this = $(this);

		return $.Deferred(function(dfd){
			$this.each(function(){
				queue.push({
					target: $(this),
					deferred: dfd
				});
			});

			if(queue.length > 0 && interval === null) {
				interval = w.setInterval(resolve, 250);
			}

		}).promise();
	};

}(jQuery, window));