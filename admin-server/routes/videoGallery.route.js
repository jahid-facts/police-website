const express = require('express');
const { getVideoGallery,saveVideoGallery,getSingleVideoGallery,updateVideoGallery,deleteVideoGallery } = require('../controllers/videoGalleryController');
const router = express.Router();

router.get('/video-gallery', getVideoGallery);
router.get('/video-gallery/:id', getSingleVideoGallery);
router.put('/update-video-gallery/:id', updateVideoGallery);
router.delete('/delete-video-gallery/:id', deleteVideoGallery);
router.post('/save-video-gallery', saveVideoGallery);

module.exports = router;