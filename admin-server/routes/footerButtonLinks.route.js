const express = require('express');
const { getButtonLink,saveButtonLink,getSingleButtonLink,updateButtonLink,deleteButtonLink } = require('../controllers/footerButtonLinksController');
const router = express.Router();

router.get('/footer-button-link', getButtonLink);
router.get('/footer-button-link/:id', getSingleButtonLink);
router.put('/update-footer-button-link/:id', updateButtonLink);
router.delete('/delete-footer-button-link/:id', deleteButtonLink);
router.post('/save-footer-button-link', saveButtonLink);

module.exports = router;