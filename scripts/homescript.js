'use strict';

$(document).ready(function(){

  // AJAX call to Vimeo appends each video
  $.ajax('https://api.vimeo.com/me/albums/4683040/videos?sort=manual', {
    headers: {
      'Authorization': 'basic Y2Y1Y2Y2ZTFiNzlmOTQ3MDM4YzU4YTY4MzBhNjUyZjg3NTY4OTFmODpyRDZJSUxjQkxTRTI1UVo0TnVDRmJyY2xvZmRHM2tWUzRVYmIrY3FwNXAzVGNGOFVtNHpVcElLNXVrMG14a2xBRFRkbWsvMkhjVW9YQksyU0dXTWNORFRYckQ4MVVLMnlnbmxOWC8ySnVvdlRlNk1ySHVuOWowbkR3bmdYME5Iaw=='
    },
    method: 'GET',
    dataType: 'json',
    success: function(resp) {
      resp.data.forEach(function(video){
        var $vidAspect = (video.height / video.width);
        if (video.privacy.embed === 'public') {
          $('#embeds').append(`<iframe class="myFrame sixteen wide column" src="https://player.vimeo.com/video/${video.uri.slice(8, 17)}?portrait=0" width="100%" height="${$('#projects').width() * $vidAspect}" frameborder="0" data-aspect="${$vidAspect}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
        }
      })
    }
  })

  // Screen Resize / Rotate settings
  $(window).on("resize",function(){
    // Resizes iFrames
    $('.myFrame').attr('height', function(){
      return $('#embeds').width() * $(this).data('aspect');
    });
  });

});
