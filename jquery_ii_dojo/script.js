$(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').css('display', 'block');
  });

  $('#close-modal').click(function() {
    $('#signup-modal').css('display', 'none');
  });
});