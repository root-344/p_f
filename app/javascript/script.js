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
  $('#button1').click(function() {
    var content1 = $('#content1').offset().top
    $("html,body").animate({scrollTop:content1},300);
  });
  $('#button2').click(function() {
    var content2 = $('#content2').offset().top
    $("html,body").animate({scrollTop:content2},300);
  });
  $('#button3').click(function() {
    var content3 = $('#content3').offset().top
    $("html,body").animate({scrollTop:content3},300);
  });
});