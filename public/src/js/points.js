import "./../less/my/points.less"
import "./../less/widgets/popup.less"
import $ from "jquery"

import Popup from './widgets/popup/index'
import czTemplate from './tmpl/cz.html'

$(function() {
	$(document).on('click', '.btn-cz', function(e) {
		var $this = $(this);

		if ($this.hasClass('disabled')) {
			return false;
		}

		$this.addClass('disabled');

		var p = new Popup({ title: '积分充值', html: czTemplate, appendClass: 'medium', btns: [{ text: '取消', css: 'btn9'}, { text: '确定支付', css: 'btn1'}], closeCallback: function() { $this.removeClass('disabled'); }, btnClickCallback: function(index, $confirmUploadWrap) {
			if (0 == index) {
				$this.removeClass('disabled');
				p.close();
			} else {
				$this.removeClass('disabled');
			}
		}});
	});
});
