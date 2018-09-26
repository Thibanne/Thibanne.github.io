$(document).ready(function() {
  $(jQuery).ready(function() {
    $('#home').click(function() {
      $('#content-logs').slideUp();
      $('#content-parcours').slideUp();
      $('#content-links').slideUp();
      $('#content-home').slideDown();

    });
    $('#logs').click(function() {
      $('#content-home').slideUp();
      $('#content-parcours').slideUp();
      $('#content-links').slideUp();
      $('#content-logs').slideDown();
    });
    $('#parcours').click(function() {
      $('#content-logs').slideUp();
      $('#content-home').slideUp();
      $('#content-links').slideUp();
      $('#content-parcours').slideDown();
    });
    $('#links').click(function() {
      $('#content-logs').slideUp();
      $('#content-parcours').slideUp();
      $('#content-home').slideUp();
      $('#content-links').slideDown();
    });
  });
});
