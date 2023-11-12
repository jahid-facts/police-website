const express = require('express');
const {multipleUpload,deleteSingleImage, getImageGallery,saveImageGallery,getSingleImageGallery,updateImageGallery,deleteImageGallery } = require('../controllers/imageGalleryController');
const router = express.Router();

router.get('/image-gallery', getImageGallery);
router.get('/image-gallery/:id', getSingleImageGallery);
router.put('/update-image-gallery/:id', updateImageGallery);
router.delete('/delete-image-gallery/:id', deleteImageGallery);
router.post('/save-image-gallery', saveImageGallery);
router.put('/delete-single-gallery-image/:id', deleteSingleImage);

module.exports = router;