var index = 1;
import $ from "jquery"
import _ from "lodash"
	
function radio(o) {
	this.options = {};
	this.options = $.extend(this.options, o || {});
}

radio.prototype = {
	create: function() {
		var that = this,
      o = that.options,
			$target = o.target,
			data = o.data || [],
			disabled = !!o.disabled,
			tsClass = new Date().getTime() + (index++) + '-radio',
			appendClass= o.appendClass,
			items = [];

		o.tsClass = tsClass;
		
		items.push('<ul class="g-radio ' + tsClass + (appendClass ? ' ' + appendClass : '') + (disabled ? ' disabled' : '') + '">');
		
		$.each(data, function(i, item) {
			items.push('<li data-val="' + item.val + '"' + (!!item.checked ? ' class="checked"' : '') + '><i' + (!!item.checked ? ' class="iconfont chainio-icon-yduidanxuankuangxuanzhong"' : ' class="iconfont chainio-icon-yduidanxuankuang"') + '></i>' + item.text + '</li>');
		});
		
		items.push('</ul>');
		
		$target.empty().append($(items.join('')));
		
		$(document).on('click', '.' + tsClass + ' li', function(e) {
			var $this = $(this);
			
			if ($this.hasClass('checked')) {
				return false;
			}

			if (that.options.disabled) {
				o.disabledCallback && o.disabledCallback($this.index());
				return false;
			}
			
			var val = $this.attr('data-val');
      var status = o.callback ? o.callback(val, $this.index(), that) : true;

      if (!status) return false;

			_.forEach(data, function(o) {
				if (o.val == val) {
					o.checked = true;
				} else {
					o.checked = false;
				}
			});
			
			$this.addClass('checked').siblings().removeClass('checked');
      $this.find('i').removeClass('chainio-icon-yduidanxuankuang').addClass('chainio-icon-yduidanxuankuangxuanzhong').end().siblings().find('i').removeClass('chainio-icon-yduidanxuankuangxuanzhong').addClass('chainio-icon-yduidanxuankuang');
		});

		return this;
	},
	setChecked: function(val) {
		var o = this.options,
			data = o.data || [],
			$radio = $('.' + o.tsClass),
			$li = $radio.find('li[data-val=' + val + ']');

		$li.addClass('checked').siblings().removeClass('checked');
		$li.find('i').removeClass('chainio-icon-yduidanxuankuang').addClass('chainio-icon-yduidanxuankuangxuanzhong').end().siblings().find('i').removeClass('chainio-icon-yduidanxuankuangxuanzhong').addClass('chainio-icon-yduidanxuankuang');
		
		_.forEach(data, function(o) {
			if (o.val == val) {
				o.checked = true;
			} else {
				o.checked = false;
			}
		});
		
		return this;
	},
	getData: function() {
		return this.options.data;
	},
	getCheckedItem: function() {
		var data = this.options.data || [],
			items =_.filter(data, function(o) {
				return !!o.checked;
			});
		return items.length ? items[0] : {};
	},
  setDisabled: function (b) {
    var o = this.options,
    	tsClass = o.tsClass,
      $ul = $('.' + tsClass);
    if (b) {
      $ul.addClass('disabled');
      o.disabled = true;
    } else {
      $ul.removeClass('disabled');
      o.disabled = false;
    }
    return this;
	},
	getTsClass: function() {
		return this.options.tsClass;
	},
	equal: function(obj) {
		return this.options.tsClass == obj.options.tsClass;
	}
};

module.exports = radio;