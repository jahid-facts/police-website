const express = require('express');
const { getSubtitleSubpages, saveSubtitleSubpage, getSingleSubtitleSubpage, updateSubtitleSubpage, deleteSubtitleSubpage } = require('../controllers/subTitleSubPagesController');
const router = express.Router();

// router.get('/bit-officers', getBitOfficers);

// router.get('/bit-policing-count', getTotalBitOfficers)

router.get('/sub-title-sub-pages/:id', getSingleSubtitleSubpage);
router.put('/update-sub-title-sub-pages/:id', updateSubtitleSubpage);
router.delete('/delete-sub-title-sub-pages/:id', deleteSubtitleSubpage);
router.post('/create-sub-title-sub-pages', saveSubtitleSubpage);
router.get('/sub-title-sub-pages', getSubtitleSubpages);

module.exports = router;