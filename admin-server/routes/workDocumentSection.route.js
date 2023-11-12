const express = require('express');
const { getWorkDocumentSection,saveWorkDocumentSection,getSingleWorkDocumentSection,updateWorkDocumentSection,deleteWorkDocumentSection } = require('../controllers/workDocumentSectionController');
const router = express.Router();

router.get('/work-document-section', getWorkDocumentSection);
router.get('/work-document-section/:id', getSingleWorkDocumentSection);
router.put('/update-work-document-section/:id', updateWorkDocumentSection);
router.delete('/delete-work-document-section/:id', deleteWorkDocumentSection);
router.post('/save-work-document-section', saveWorkDocumentSection);

module.exports = router;