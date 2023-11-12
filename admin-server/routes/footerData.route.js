const express = require('express');
const { getFooterData,saveFooterData,getSingleFooterData,updateFooterData,deleteFooterData } = require('../controllers/footerDataController');
const router = express.Router();

router.get('/footer-data', getFooterData);
router.get('/footer-data/:id', getSingleFooterData);
router.put('/update-footer-data/:id', updateFooterData);
router.delete('/delete-footer-data/:id', deleteFooterData);
router.post('/save-footer-data', saveFooterData);

module.exports = router;