import "./../less/my/reply.less"
import "./../less/widgets/radio.less"
import $ from "jquery"
import radio from "./widgets/radio/index.js"
import rules from "./utils/validateRules"
import stringUtil from "./utils/stringUtil"
import tip from "./widgets/tip"

$(function() {
	laydate.render({
	  elem: '#startDate'
	  ,type: 'month'
	});
	laydate.render({
	  elem: '#endDate'
	  ,type: 'month'
	});

	var serveRadio = new radio({ data: [ { text: '全职', val: 10, checked: true }, { text: '兼职', val: 20 }, { text: '派遣', val: 30 } ], target: $('.serve-type-content'), callback: function (val, index, that) {
		return true;
	} }).create();

	var disRadio = new radio({ data: [ { text: '否', val: 0, checked: true }, { text: '是', val: 1 } ], target: $('.violation-of-dis-content'), callback: function (val, index, that) {
		return true;
	} }).create();

	var controversyRadio = new radio({ data: [ { text: '否', val: 0, checked: true }, { text: '是', val: 1 } ], target: $('.controversy-content'), callback: function (val, index, that) {
		return true;
	} }).create();

	$('.btn-reply').on('click', function(e) {
  	var startDate = stringUtil.trim($('#startDate').val()),
      endDate = stringUtil.trim($('#endDate').val()),
      positionDesc = stringUtil.trim($('#positionDesc').val()),
      salary = stringUtil.trim($('#salary').val()),
      leaveReason = stringUtil.trim($('#leaveReason').val());

    if (!rules.isNotEmpty.fn(startDate) || !rules.isNotEmpty.fn(endDate)) {
      tip.warn('请选择供职时间');
      return false;
    }

    if (+(startDate.replace('-', '')) > +(endDate.replace('-', ''))) {
      tip.warn('供职时间选择有误');
      return false;
    }

    if (!rules.isNotEmpty.fn(positionDesc)) {
      tip.warn('请输入供职描述');
      return false;
    }

    if (!rules.isNotEmpty.fn(salary)) {
      tip.warn('请输入薪酬范围');
      return false;
    }

    if (!rules.isNotEmpty.fn(leaveReason)) {
      tip.warn('请输入离职原因');
      return false;
    }

    tip.success('背调回复成功，您获得 100 背调积分', function() {
    	setTimeout(function() {
    		window.location.href = '/my/receive';
    	}, 1000);
  	});

    return false;
  });
});