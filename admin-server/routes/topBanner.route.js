const express = require('express');
const { getBanner,saveBanner,getSingleBanner,updateBanner,deleteBanner } = require('../controllers/topBannerController');
const router = express.Router();

router.get('/banner', getBanner);
router.get('/banner/:id', getSingleBanner);
router.put('/update-banner/:id', updateBanner);
router.delete('/delete-banner/:id', deleteBanner);
router.post('/save-banner', saveBanner);

module.exports = router;