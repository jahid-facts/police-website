const express = require('express');
const {getBitNewsByOfficer, getBitNews,saveBitNews,getSingleBitNews,updateBitNews,deleteBitNews } = require('../controllers/bitNewsController');
const router = express.Router();

router.get('/bit-news', getBitNews);
router.get('/bit-news/:id', getSingleBitNews);
router.put('/update-bit-news/:id', updateBitNews);
router.delete('/delete-bit-news/:id', deleteBitNews);
router.post('/save-bit-news', saveBitNews);
router.get('/bit-news-by-officer/:officerId', getBitNewsByOfficer);

module.exports = router;