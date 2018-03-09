import "./../less/my/info.less"
import $ from "jquery"

$(function() {
  $('.btn-eye').on('click', function() {
    var $this = $(this),
        $input = $this.prev(),
        textType = $input.attr('type');
    if ($this.hasClass('chainio-icon-eye-off') && textType === 'password') {
      $this.removeClass('chainio-icon-eye-off').addClass('chainio-icon-eye-on');
      $input.attr('type', 'text');
    } else if ($this.hasClass('chainio-icon-eye-on') && textType === 'text') {
      $this.removeClass('chainio-icon-eye-on').addClass('chainio-icon-eye-off');
      $input.attr('type', 'password');
    }
  });
  $('.user-cname').on('click', function() {
    var $this = $(this);
    $this.parents('.top').toggleClass('show');
  })
});
