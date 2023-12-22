const express = require('express');
const { getAllSubtitles, createSubtitle, getSingleSubtitle, updateSubtitle, deleteSubtitle } = require('../controllers/subTitleController');
const router = express.Router();

router.get('/sub-title', getAllSubtitles);
router.get('/sub-title/:id', getSingleSubtitle);
router.put('/update-sub-title/:id', updateSubtitle);
router.delete('/delete-sub-title/:id', deleteSubtitle);
router.post('/create-sub-title', createSubtitle);

module.exports = router;