import "./../less/login.less"
import $ from "jquery"
import rules from "./utils/validateRules"
import stringUtil from "./utils/stringUtil"
import tip from "./widgets/tip"

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
    var privateKey = stringUtil.trim($('.private-key').val()),
        returnUrl = $('#returnUrl').val();

    if (!rules.isNotEmpty.fn(privateKey)) {
      tip.warn('导入失败，请重新导入');
      return false;
    }

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
        if (0 == json.errorNo) {
          tip.success('导入成功', function() {
            window.location.href = (returnUrl ? returnUrl : '/my');
          });
        } else {
          tip.warn('导入失败，请重新导入');
        }
      },
      error : function(err) {
        tip.warn('请求出错');
      }
    });

    return false;
  });

});
