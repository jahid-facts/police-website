const express = require('express');
const { getDig,saveDig,getSingleDig,updateDig,deleteDig } = require('../controllers/digController');
const router = express.Router();

router.get('/dig', getDig);
router.get('/dig/:id', getSingleDig);
router.put('/update-dig/:id', updateDig);
router.delete('/delete-dig/:id', deleteDig);
router.post('/save-dig', saveDig);

module.exports = router;