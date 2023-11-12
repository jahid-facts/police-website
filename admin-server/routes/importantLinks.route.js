const express = require('express');
const { getImportantLink,saveImportantLink,getSingleImportantLink,updateImportantLink,deleteImportantLink } = require('../controllers/importantLinksController');
const router = express.Router();

router.get('/important-link', getImportantLink);
router.get('/important-link/:id', getSingleImportantLink);
router.put('/update-important-link/:id', updateImportantLink);
router.delete('/delete-important-link/:id', deleteImportantLink);
router.post('/save-important-link', saveImportantLink);

module.exports = router;