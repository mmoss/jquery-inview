# Copyright 2013, Murray M. Moss
do (jQuery, window) ->
  $ = jQuery
  $w = jQuery(window)
  interval = null
  queue = []
  {setInterval, clearInterval} = window

  inView = ($el) ->
    viewTop = $w.scrollTop()
    viewBtm = viewTop + $w.height()
    elTop = $el.offset().top
    elBtm = elTop + $el.height()
    elBtm >= viewTop and elTop <= viewBtm

  resolve = ->
    if queue.length > 0
      i = queue.length - 1
      while i >= 0
        itm = queue[i]
        if inView(itm.target)
          itm.deferred.resolve itm.target
          queue.splice i, 1
        i--
      if queue.length < 1
        clearInterval interval
        interval = null

  $.fn.inView = ($el=this, callback) ->
    deferred = $.Deferred (dfd) ->
      $el.each -> queue.push target: $(this), deferred: dfd
      if queue.length > 0 and interval is null
        interval = setInterval(resolve, 250)

    deferred.done(callback) if callback?
    return deferred.promise()