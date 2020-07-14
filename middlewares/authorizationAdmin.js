const authorization = (req, res, next) => {
	const adminRole = req.userData.role;

	if (adminRole === 'SuperAdmin') {
		next();
	} else {
		next({ name: 'Forbidden access' });
	}
};

module.exports = authorization;
