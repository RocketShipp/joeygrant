'use strict';

$(document).ready(function(){

  // Sidebar Trigger
  $('.ui.sidebar').sidebar('attach events', '.icon.content', 'show');

  // Loading Icon settings
  $('#embeds').css('display', 'none');

  // AJAX call to Vimeo appends each video

  $.ajax('https://api.vimeo.com/users/user980609/videos', {
    headers: {
      'Authorization': 'basic Y2Y1Y2Y2ZTFiNzlmOTQ3MDM4YzU4YTY4MzBhNjUyZjg3NTY4OTFmODpyRDZJSUxjQkxTRTI1UVo0TnVDRmJyY2xvZmRHM2tWUzRVYmIrY3FwNXAzVGNGOFVtNHpVcElLNXVrMG14a2xBRFRkbWsvMkhjVW9YQksyU0dXTWNORFRYckQ4MVVLMnlnbmxOWC8ySnVvdlRlNk1ySHVuOWowbkR3bmdYME5Iaw=='
    },
    method: 'GET',
    dataType: 'json',
    success: function(resp) {
      resp.data.forEach(function(video){
        var $vidAspect = (video.height / video.width);
        if (video.privacy.embed === 'public') {
          $('#embeds').append(`<iframe class="myFrame sixteen wide column" src="https://player.vimeo.com/video/${video.uri.slice(8, 17)}?autoplay=0&portrait=0" width="100%" height="${$('#projects').width() * $vidAspect}" frameborder="0" data-aspect="${$vidAspect}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
        }
      })
      $('#loader').css('display', 'none');
      $('#embeds').css('display', 'block');
    }
  })

  // Responsive textarea height
  $('#message').css('min-height', $('#subject').height() * 3);

  // Device rotation settings
  $(window).on("orientationchange",function(){
    // Resizes iFrames
    $('.myFrame').attr('height', function(){
      return $('#embeds').width() * $(this).data('aspect');
    });
    // Resizes textarea
    $('#message').css('min-height', $('#subject').height() * 3);
  });

  // Form validator
  $('.contactInput').on('input', function(){
    if ($('#name').val() !== '' && $('#email').val() !== '' && $('#subject').val() !== '' && $('#message').val() !== '') {
      if ($('#submit').hasClass('disabled')) {
        $('#submit').removeClass('disabled');
      }
    } else {
      $('#submit').addClass('disabled');
    }
  })

  // Footer copyright year
  var d = new Date();
  var n = d.getFullYear();
  $('.footerText').prepend('© ' + n);

});
