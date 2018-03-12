import "./../less/login.less"
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

  $('.btn-login').on('click', function(e) {
    var privateKey = $('.private-key').val().trim(),
        returnUrl = $('#returnUrl').val();

    if (privateKey) {
      var d = {
        privateKey: privateKey,
        returnUrl: returnUrl
      };
      $.ajax({
        url: '/login',
        type : 'POST',
        data: JSON.stringify(d),
        cache : false,
        async : true,
        contentType: "application/json;charset=utf-8",
        success : function (json) {
          window.location.href = '/my/info';
        },
        error : function(err) {
          alert('请求出错');
        }
      });
    }
  });
});