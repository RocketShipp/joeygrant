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
  $('#toTop a').click(function(){
    $(window).scrollTop(0);
  })

  // Sticky
  $('.sticky').sticky();

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
    // Resizes textarea
    $('#message').css('min-height', $('#name').height() * 3);
  });

  // Responsive form textarea height
  $('#message').css('min-height', $('#subject').height() * 3);

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
