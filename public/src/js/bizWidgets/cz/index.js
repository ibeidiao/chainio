import $ from 'jquery';
import Popup from '../../widgets/popup/index';
import czTemplate from './cz.html';
import stringUtil from "../../utils/stringUtil"
import rules from "../../utils/validateRules"
import tip from "../../widgets/tip"
import "../../../less/bizWidgets/cz.less";

function cz(o) {
	o = o || {};
	var p = new Popup({ title: '积分充值', html: czTemplate, appendClass: 'medium', btns: [{ text: '取消', css: 'btn9'}, { text: '确定支付', css: 'btn1'}], closeCallback: function() { o.closeCallback && o.closeCallback(); }, btnClickCallback: function(index, $popup) {
		if (0 == index) {
			o.closeCallback && o.closeCallback();
			p.close();
		} else {
			var val = stringUtil.trim($popup.find('.val').val());
			if (!rules.isNotEmpty.fn(val)) {
	      tip.warn('请输入充值金额');
	      return false;
	    }
			o.closeCallback && o.closeCallback();
		}
	}});
}

$(document).on('click', '.cz-wrap .pay-method i', function (e) {
	$(this).addClass('active').siblings().removeClass('active');
	return false;
});

module.exports = cz;
