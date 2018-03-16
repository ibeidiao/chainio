import "./../less/my/send.less"
import $ from "jquery"
import rules from "./utils/validateRules"
import stringUtil from "./utils/stringUtil"
import tip from "./widgets/tip"

$(function() {

  $('.btn-send').on('click', function(e) {
    var name = stringUtil.trim($('#name').val()),
        mobile = stringUtil.trim($('#mobile').val()),
        email = stringUtil.trim($('#email').val()),
        companyName = stringUtil.trim($('#companyName').val());

    if (!rules.isNotEmpty.fn(name)) {
      tip.warn('请输入姓名');
      return false;
    }

    if (!rules.isNotEmpty.fn(mobile)) {
      tip.warn('请输入手机');
      return false;
    }

    if (!rules.isMobile.fn(mobile)) {
      tip.warn('手机输入有误');
      return false;
    }

    if (!rules.isNotEmpty.fn(email) || !rules.isEmail.fn(email)) {
      tip.warn('请输入邮箱');
      return false;
    }

    if (!rules.isEmail.fn(email)) {
      tip.warn('邮箱输入有误');
      return false;
    }

    if (!rules.isNotEmpty.fn(companyName)) {
      tip.warn('请输入公司名称');
      return false;
    }

    tip.success('背调发起成功，请等待目标公司回复背调', function() {
    	setTimeout(function() {
    		window.location.href = '/my/orderList';
    	}, 1000)
    	
  	});

    return false;
  });

});
