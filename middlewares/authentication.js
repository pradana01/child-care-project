const verify = require('../helper/jwt-verify')

const authentication = (req, res, next) => {
	const { access_token } = req.headers;

	if (!access_token) {
	
		next({name: 'DATA_NOT_FOUND'})
	}

	try {
		const decoded = verify(access_token);
		console.log(decoded);
		req.userData = decoded;

		next();
	} catch (err) {
		// res.status(401).json({
		// 	error: 'User not authenticated'
		// });
		next(err)
	}
};

module.exports = authentication