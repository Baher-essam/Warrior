//header slider time
$(document).ready(function() {
    $('.carousel').carousel({
      interval: 2500,
    })
});
//menu btn

//navbar small screen toggle btn
$('.collapse-menu-btn').click(function () {
    $('.collapse-menu').toggleClass('active');
    $('.main-menu').toggleClass('active');
  });
    //navbar small screen toggle links
    $('.main-menu .menu-item').click(function () {
      $('.collapse-menu').toggleClass('active');
      $('.main-menu').toggleClass('active');
    });