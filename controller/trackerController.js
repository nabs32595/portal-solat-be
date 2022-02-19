const asyncHandler = require('express-async-handler');

const getTracker = asyncHandler(async (req, res) => {
	res.json({message: 'Get records'});
});

const setTracker = asyncHandler( async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('text is required');
	}
	res.json({message: 'Set records'});
});

const updateTracker = asyncHandler( async (req, res) => {
	res.json({message: `Edit records ${req.params.id}`});
});

const deleteTracker = asyncHandler( async (req, res) => {
	res.json({message: `Delete records ${req.params.id}`});
});

module.exports = {
	getTracker, setTracker, updateTracker, deleteTracker
};
