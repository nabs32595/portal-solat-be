const admin = require('../config/firebase');

class FirebaseMiddleware {
	async checkIfAuthenticated(req, res, next) {
		if (
			req.headers.authorization &&
			req.headers.authorization.split(' ')[0] === 'Bearer'
		) {
			req.authToken = req.headers.authorization.split(' ')[1];
		} else {
			req.authToken = null;
		}

		try {
			const decodeValue = await admin.auth().verifyIdToken(req.authToken);
			if (decodeValue) {
				req.user = decodeValue;
				return next();
			}
			return res.json({message: 'Un authorize'});
		} catch (e) {
			console.error(e)
			return res.json({message: 'Internal Error'});
		}
	}

}

module.exports = new FirebaseMiddleware();
