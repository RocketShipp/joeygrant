'use strict';

$(document).ready(function(){

  // Frame setter
  var framesetter = function(){
    if ((top.window.outerHeight != self.window.outerHeight)
    || top.window.outerWidth != self.window.outerWidth) {
      top.window.outerHeight = self.window.outerHeight;
      top.window.outerWidth = self.window.outerWidth;
    }
  }

  framesetter();

  // Screen Resize
  $(window).on("resize",function(){
    framesetter();
  });

  // Sidebar Trigger
  $('.ui.sidebar').sidebar('attach events', '.icon.content', 'show');

  // Popup settings
  $('.computer.only .ui.menu div a').popup({
    inline     : false,
    hoverable  : false,
    position   : 'left center',
  });

  // Scroll to Top settings
  $('#toTop').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  })

  // Footer copyright year
  var d = new Date();
  var n = d.getFullYear();
  $('.footerText').prepend('© ' + n);

});
