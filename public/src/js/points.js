import $ from "jquery"

import cz from './bizWidgets/cz/index'
import tip from './widgets/tip/index'

import "./../less/my/points.less"

$(function() {
	//tip.success('你好美');

	$(document).on('click', '.btn-cz', function(e) {
		var $this = $(this);

		if ($this.hasClass('disabled')) {
			return false;
		}

		$this.addClass('disabled');

		new cz({
			closeCallback: function() {
				$this.removeClass('disabled');
			}
		});

		return false;
	});
});
