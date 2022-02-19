const express = require('express');
const router = express.Router();
const {getTracker,setTracker,deleteTracker,updateTracker} = require('../controller/trackerController');

router.route('/').get(getTracker).post(setTracker);
router.route('/:id').put(updateTracker).delete(deleteTracker);

module.exports = router;
