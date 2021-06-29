$(function() {
  $('#cnt-name1').click(function() {
    $('#modal1').fadeIn();
  });
  $('#cnt-name2').click(function() {
    $('#modal2').fadeIn();
  });
  $('.close-modal').click(function() {
    $('.modal-wrapper').fadeOut();
  });
});