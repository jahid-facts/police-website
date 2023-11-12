const express = require('express');
const { getBitPolicePages,saveBitPolicePages,getSingleBitPolicePages,updateBitPolicePages,deleteBitPolicePages } = require('../controllers/bitPolicePageController');
const router = express.Router();

router.get('/bit-police-pages', getBitPolicePages);
router.get('/bit-police-pages/:id', getSingleBitPolicePages);
router.put('/update-bit-police-pages/:id', updateBitPolicePages);
router.delete('/delete-bit-police-pages/:id', deleteBitPolicePages);
router.post('/save-bit-police-pages', saveBitPolicePages);

module.exports = router;