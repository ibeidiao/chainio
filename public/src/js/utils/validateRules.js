function trimSpace(val) {
	if (!val) {
		return val;
	}
	val = val.replace(/(^\s*)|(\s*$)/g, "");
	return val.replace(/(^　*)|(　*$)/g, "");
}

var rules = {
	isNotEmpty: {
    name: 'isNotEmpty',
		fn: function (value) {
			value = trimSpace(value);
			return !!value;
	  }
	},
	isMobile: {
    name: 'isMobile',
		fn: function (value) {
			value = trimSpace(value);
      return !value || /^(((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8})$/.test(value);
    }
	},
	isEmail: {
  	name: 'isEmail',
		fn: function(value, element) {
			value = trimSpace(value);
			return !value || /^\w+([\.-]?\w+)*@\w+([\.-]\w+)*(\.\w{2,100})+$/.test(value);
    }
	},
	isIdNum: {
  	name: 'isIdNum',
		fn: function(value, element) {
			value = trimSpace(value);
			return !value || (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value) || /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(value));
    }
	}
};

module.exports = rules;
