'use strict';

$(document).ready(function(){

  // Screen Resize / Rotate settings
  $(window).on("resize",function(){
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

  $('#hidden_iframe').attr('onload', `$('#contact div').html('<i class="icon check circle outline"></i>')`)

});
