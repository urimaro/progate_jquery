$(function() {
  $('.social-icon').hover(
    function() {
      $(this).animate({'font-size': '30px'}, 300);
    },
    function() {
      $(this).animate({'font-size': '24px'}, 300);
    }
  );

  $('#top-btn').click(function() {
    $('html, body').scrollTop(0);
  });
});