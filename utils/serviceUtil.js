module.exports = {
	getServiceResError: function(res, error) {
    if (!error) {
        error = { status: 404, message: 'Not Found', stack: '' };
    }
		return res.status(error.status).send({
      message: error.message,
      stack: error.stack
  	});
	}
};