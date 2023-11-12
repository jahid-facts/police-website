const express = require('express');
const { getActivitySlider,saveActivitySlider,getSingleActivitySlider,updateActivitySlider,deleteActivitySlider } = require('../controllers/activitySliderController');
const router = express.Router();

router.get('/activity-slider', getActivitySlider);
router.get('/activity-slider/:id', getSingleActivitySlider);
router.put('/update-activity-slider/:id', updateActivitySlider);
router.delete('/delete-activity-slider/:id', deleteActivitySlider);
router.post('/save-activity-slider', saveActivitySlider);

module.exports = router;