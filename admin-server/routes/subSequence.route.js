const express = require('express');
const { getSubsequences, saveSubsequence, getSingleSubsequence, updateSubsequence, deleteSubsequence } = require('../controllers/subSequenceController');
const router = express.Router();

router.get('/sub-sequence', getSubsequences);
router.get('/sub-sequence/:id', getSingleSubsequence);
router.put('/update-sub-sequence/:id', updateSubsequence);
router.delete('/delete-sub-sequence/:id', deleteSubsequence);
router.post('/create-sub-sequence', saveSubsequence);

module.exports = router;