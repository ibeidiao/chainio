import "./../less/my/orderList.less"
import $ from "jquery"

$(function() {
	$(document).on('click', '.tab-switchs li', function(e) {
		var $this = $(this),
			index = $this.index();
		$this.addClass('active').siblings().removeClass('active');
		$this.parents('.tab').find('.tab-content').hide().eq(index).show();
		return false;
	});
});