const express = require('express');
const { getSlide,saveSlide,getSingleSlide,updateSlide,deleteSlide } = require('../controllers/topSliderController');
const router = express.Router();

router.get('/slide', getSlide);
router.get('/slide/:id', getSingleSlide);
router.put('/update-slide/:id', updateSlide);
router.delete('/delete-slide/:id', deleteSlide);
router.post('/save-slide', saveSlide);

module.exports = router;