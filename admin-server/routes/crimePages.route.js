const express = require('express');
const { getCrimePages,saveCrimePages,getSingleCrimePages,updateCrimePages,deleteCrimePages } = require('../controllers/crimePagesController');
const router = express.Router();

router.get('/crime-pages', getCrimePages);
router.get('/crime-pages/:id', getSingleCrimePages);
router.put('/update-crime-pages/:id', updateCrimePages);
router.delete('/delete-crime-pages/:id', deleteCrimePages);
router.post('/save-crime-pages', saveCrimePages);

module.exports = router;