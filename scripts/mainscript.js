'use strict';

$(document).ready(function(){

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
    $(window, 'html, body').scrollTop(0);
  })

  // Footer copyright year
  var d = new Date();
  var n = d.getFullYear();
  $('.footerText').prepend('© ' + n);

});
