import "./../less/my/orderList.less"
import $ from "jquery"

$(function() {
	(() => {
		var type = $('#type').val() || 'l';

		if ('l' == type) {
			$('.tab-switchs li').eq(0).addClass('active');
			$('.tab-content').eq(0).addClass('active');
		} else {
			$('.tab-switchs li').eq(1).addClass('active');
			$('.tab-content').eq(1).addClass('active');
		}
	})();

	$(document).on('click', '.tab-switchs li', function(e) {
		var $this = $(this),
			index = $this.index();
		$this.addClass('active').siblings().removeClass('active');
		$this.parents('.tab').find('.tab-content').hide().eq(index).show();
		return false;
	});
});