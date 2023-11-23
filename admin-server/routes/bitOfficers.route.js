const express = require('express');
const { getBitOfficersOnly,getBitOfficers,getTotalBitOfficers,saveBitOfficers,getSingleBitOfficers,updateBitOfficers,deleteBitOfficers } = require('../controllers/bitOfficersController');
const router = express.Router();

router.get('/bit-officers', getBitOfficers);

router.get('/bit-policing-count', getTotalBitOfficers)

router.get('/bit-officers/:id', getSingleBitOfficers);
router.put('/update-bit-officers/:id', updateBitOfficers);
router.delete('/delete-bit-officers/:id', deleteBitOfficers);
router.post('/save-bit-officers', saveBitOfficers);
router.get('/bit-officers-only', getBitOfficersOnly);

module.exports = router;