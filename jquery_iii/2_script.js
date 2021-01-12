$(function() {
  var title = $('#title').text();
  var id = $('.section-content p').attr('id');
  var href = $('#link').attr('href');

  $('#title-text').text(title);
  $('#content-id').text(id);
  $('#link-href').text(href);
});