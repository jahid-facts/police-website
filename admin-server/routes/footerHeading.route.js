const express = require('express');
const { getFooterHeading,saveFooterHeading,getSingleFooterHeading,updateFooterHeading,deleteFooterHeading } = require('../controllers/footerHeadingController');
const router = express.Router();

router.get('/footer-heading', getFooterHeading);
router.get('/footer-heading/:id', getSingleFooterHeading);
router.put('/update-footer-heading/:id', updateFooterHeading);
router.delete('/delete-footer-heading/:id', deleteFooterHeading);
router.post('/save-footer-heading', saveFooterHeading);

module.exports = router;