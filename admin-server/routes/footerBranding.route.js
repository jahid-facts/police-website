const express = require('express');
const { getFooterBranding,saveFooterBranding,getSingleFooterBranding,updateFooterBranding,deleteFooterBranding } = require('../controllers/footerBrandingController');
const router = express.Router();

router.get('/footer-branding', getFooterBranding);
router.get('/footer-branding/:id', getSingleFooterBranding);
router.put('/update-footer-branding/:id', updateFooterBranding);
router.delete('/delete-footer-branding/:id', deleteFooterBranding);
router.post('/save-footer-branding', saveFooterBranding);

module.exports = router;