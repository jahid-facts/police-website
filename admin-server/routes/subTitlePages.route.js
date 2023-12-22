const express = require('express');
const { getAllSubtitlePages, createSubtitlePages, getSingleSubtitlePages, updateSubtitlePages, deleteSubtitlePages } = require('../controllers/subTitlePagesController');
const router = express.Router();

router.get('/sub-title-pages', getAllSubtitlePages);
router.get('/sub-title-pages/:id', getSingleSubtitlePages);
router.put('/update-sub-title-pages/:id', updateSubtitlePages);
router.delete('/delete-sub-title-pages/:id', deleteSubtitlePages);
router.post('/create-sub-title-pages', createSubtitlePages);

module.exports = router;