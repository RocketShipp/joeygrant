'use strict';

$(document).ready(function(){

  // Sidebar Trigger
  $('.ui.sidebar').sidebar('attach events', '.icon.content', 'show');

  // Loading Icon settings
  $('div.pusher').hide();
  $('#loader').attr('height', $(window).height());


  // AJAX call to Vimeo appends each video
  var $vidAspect = null;

  $.ajax('https://api.vimeo.com/users/user980609/videos', {
    headers: {
      'Authorization': 'basic Y2Y1Y2Y2ZTFiNzlmOTQ3MDM4YzU4YTY4MzBhNjUyZjg3NTY4OTFmODpyRDZJSUxjQkxTRTI1UVo0TnVDRmJyY2xvZmRHM2tWUzRVYmIrY3FwNXAzVGNGOFVtNHpVcElLNXVrMG14a2xBRFRkbWsvMkhjVW9YQksyU0dXTWNORFRYckQ4MVVLMnlnbmxOWC8ySnVvdlRlNk1ySHVuOWowbkR3bmdYME5Iaw=='
    },
    method: 'GET',
    dataType: 'json',
    success: function(resp) {
      resp.data.forEach(function(video){
        $vidAspect = (video.height / video.width);
        if (video.privacy.embed === 'public') {
          $('#embeds').append(`<iframe class="myFrame sixteen wide column" src="https://player.vimeo.com/video/${video.uri.slice(8, 17)}?autoplay=0&portrait=0" width="100%" height="${$('.ui.container').width() * $vidAspect}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
        }
      })
      $('#loader').hide();
      $('div.pusher').show();
    }
  })

  // Resizes iFrames on device rotation
  $(window).on("orientationchange",function(){
    $('#loader').attr('height', $(window).height());
    $('.myFrame').attr('height', $('#embeds').width() * $vidAspect);
  });

  // Current year for footer
  var d = new Date();
  var n = d.getFullYear();
  $('.footerText').prepend('© ' + n);

});
