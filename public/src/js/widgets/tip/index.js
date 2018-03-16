import "../../../less/widgets/tip.less";

var tip = {
	success: function (h, cb) {
		var tsCls = new Date().getTime() + '-tip',
				html = `<div class="tip-outer-wrap animated bounceOutDown"><div class="tip-wrap tip-success-wrap ${tsCls}"><i class="iconfont chainio-icon-gouyonghu"></i>${ h }</div></div>`;
		$('body').append($(html));
		setTimeout(() => {
			$('.' + tsCls).fadeOut(function() {
				$(this).remove();
				cb && cb();
			});
		}, 1500);
	},
	warn: function (h, cb) {
		var tsCls = new Date().getTime() + '-tip',
				html = `<div class="tip-outer-wrap animated bounceOutDown"><div class="tip-wrap tip-warn-wrap ${tsCls}"><i class="iconfont chainio-icon-gouyonghu"></i>${ h }</div></div>`;
		$('body').append($(html));
		setTimeout(() => {
			$('.' + tsCls).fadeOut(function() {
				$(this).remove();
				cb && cb();
			});
		}, 1500);
	}
};

module.exports = tip;
