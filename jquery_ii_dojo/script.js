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

  $('.faq-list-item').click(function() {
    $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });
});