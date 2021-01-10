$(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').css('display', 'block');
  });

  $('#close-modal').click(function() {
    $('#signup-modal').css('display', 'none');
  });

  $('.lesson').hover(
    function() {
      $(this).find('.text-contents').css('display', 'block');
    },
    function() {
      $(this).find('.text-contents').css('display', 'none');
    }
  );
});