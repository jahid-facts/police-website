const express = require('express');
const { getImageMultipleGallery,saveImageMultipleGallery,getSingleImageMultipleGallery,updateImageMultipleGallery,deleteImageMultipleGallery } = require('../controllers/imageMultipleGalleryController');
const router = express.Router();

router.get('/image-multiple-gallery', getImageMultipleGallery);
router.get('/image-multiple-gallery/:id', getSingleImageMultipleGallery);
router.put('/update-image-multiple-gallery/:id', updateImageMultipleGallery);
router.delete('/delete-image-multiple-gallery/:id', deleteImageMultipleGallery);
router.post('/save-image-multiple-gallery', saveImageMultipleGallery);

module.exports = router;