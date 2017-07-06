'use strict';

$(document).ready(function(){

  // Screen Resize
  $(window).on("resize",function(){
    // Resizes textarea
    $('#message').css('min-height', $('#name').height() * 3);
    // Resizes image
    if ($(window).width() >= $(window).height()) {
      $('.ui.card').css('width', '50%');
    } else {
      $('.ui.card').css('width', 'auto');      
    }
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

  // Hidden iFrame onload function
  $('#hidden_iframe').attr('onload', `$('#contact div').html('<i class="icon check circle outline"></i>')`)

});
