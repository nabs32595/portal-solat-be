const asyncHandler = require('express-async-handler');

const Tracker = require('../models/trackerModel')

const getTracker = asyncHandler(async (req, res) => {

	console.log(req.headers)

	const tracker = await Tracker.find()
	res.status(200).json({
		data: tracker
	})
});

const setTracker = asyncHandler(async (req, res) => {

	const tracker = await Tracker.create({
		subuh: req.body.subuh, zohor: req.body.zohor, asar: req.body.asar, magrib: req.body.magrib, isyak: req.body.isyak,
	})

	res.json(tracker);
});

const updateTracker = asyncHandler(async (req, res) => {

	const record = await Tracker.findById(req.params.id)
	if (!record) {
		return res.status(404).json({
			status: false, message: 'Record not found'
		})
	}

	const updatedRecord = await Tracker.findByIdAndUpdate(req.params.id, req.body, {
		new: true, runValidators: true
	})

	res.json(updatedRecord);
});

const deleteTracker = asyncHandler(async (req, res) => {
	const record = await Tracker.findById(req.params.id)
	if (!record) {
		return res.status(404).json({
			status: false, message: 'Record not found'
		})
	}

	await record.remove()

	res.status(200).json({id: req.params.id});
});

module.exports = {
	getTracker, setTracker, updateTracker, deleteTracker
};
