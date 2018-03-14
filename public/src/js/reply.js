import "./../less/my/reply.less"
import "./../less/widgets/radio.less"
import $ from "jquery"
import radio from "./widgets/radio/index.js"

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
});