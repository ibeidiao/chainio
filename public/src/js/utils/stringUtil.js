var stringUtil = {
	trim: function(str) {
		if (!str) {
			return str;
		}
		
		str = str.replace(/(^\s*)|(\s*$)/g, '');
    return str.replace(/(^　*)|(　*$)/g, '');
	}
};

module.exports = stringUtil;
