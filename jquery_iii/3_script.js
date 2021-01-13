$(function() {
  $('#form').submit(function() {
    var selectValue = $('#select-form').val();
    var textValue = $('#text-form').val();

    if (textValue == '') {
      $('#error-message').text('理由を記入してください');
    } else {
      $('#error-message').text('');
    }

    $('#output-select').text(selectValue);
    $('#output-text').text(textValue);
    return false;
  });

  $('.option-btn').click(function() {
    var optionText = $(this).text();
    var clickedOption = $(this).attr('data-option');

    $('#text-form').val(optionText + 'が好きな理由は、');
    $('#select-form').val(clickedOption);
  });
});