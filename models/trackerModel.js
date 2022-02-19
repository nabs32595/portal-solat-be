const mongoose = require('mongoose')

const trackerSchema = mongoose.Schema(
	{
		subuh: {
			type: String,
			required: [true, 'Please add a subuh value'],
		},
		zohor: {
			type: String,
			required: [true, 'Please add a zohor value'],
		},
		asar: {
			type: String,
			required: [true, 'Please add a asar value'],
		},
		magrib: {
			type: String,
			required: [true, 'Please add a magrib value'],
		},
		isyak: {
			type: String,
			required: [true, 'Please add a isyak value'],
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Tracker', trackerSchema)
