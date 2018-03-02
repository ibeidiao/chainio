import $ from 'jquery'

$(function(){
  headerScrollPosition();
  $('.icon-nav-btn').on('click', navMobileShow);
  $('.nav-mobile .btn-close,.nav-mobile .shadow').on('click', navMobileHide);
}())

function _positionScroll() {
  if ($(window).scrollTop() > 0) {
      $('header.front-header').addClass('header-scroll');
  } else {
      $('header.front-header').removeClass('header-scroll');
  }
}

function navMobileHide() {
  $('.main-wrap').removeClass('slide-left');
  $('#header').removeClass('slide-left');
  $('#footer').removeClass('slide-left');
  $('.nav-mobile .content').removeClass('content-show');
  $('.nav-mobile .shadow').hide();
  $("body").off("touchmove");
}

function navMobileShow() {
  $('.main-wrap').addClass('slide-left');
  $('#header').addClass('slide-left');
  $('#footer').addClass('slide-left');
  $('.nav-mobile .content').addClass('content-show');
  $('.nav-mobile .shadow').show();
  $("body").on("touchmove",function(event){
      event.preventDefault;
  }, false);
}

function headerScrollPosition() {
  _positionScroll();
  $(window).scroll(_positionScroll);
}

export { }