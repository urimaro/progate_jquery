$(function() {
  $('#form').submit(function() {
    var selectValue = $('#select-form').val();
    var textValue = $('#text-form').val();

    $('#output-select').text(selectValue);
    $('#output-text').text(textValue);
    return false;
  });
});