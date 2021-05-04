
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// $('li.has-menu').children('.sub-menu').hide();
$("li.has-menu")
  .children("a.link")
  .on("click", function (e) {
    e.preventDefault();
    $(this).siblings(".sub-menu").toggle("fast");
  });

$(".menu-toggle").on("click", function (e) {
  e.preventDefault();
  $(".Menu").toggle("fast");
});

//   Search Box
$(".input-group-append").hide();
$(".search-box input").focusin(function () {
  $(this).next(".input-group-append").show("fast");
});
$(".search-box input").focusout(function () {
  $(this).next(".input-group-append").hide("fast");
});
$(".input-group-append").on("click", function (e) {
  e.preventDefault();
  $(this).hide("fast");
  $(".search-box input").trigger("focusout");
});


$('.menu-button').on('click', function(e){
  e.preventDefault();
  $(this).siblings('.menu').toggle('fast');
})



// NEw Order Form Popup
$('.form-2, .form-3').hide();
$('.form-1-submit-button').on('click', function(e){
  e.preventDefault();
  $('.form-1').hide();
  $('.form-2').show();
});
$('.form-2-submit-button').on('click', function(e){
  e.preventDefault();
  $('.form-2').hide();
  $('.form-3').show();
});

$('.form-2-previous-button').on('click', function(e){
  e.preventDefault();
  $('.form-2').hide();
  $('.form-1').show();
});
$('.form-3-previous-button').on('click', function(e){
  e.preventDefault();
  $('.form-3').hide();
  $('.form-2').show();
});
